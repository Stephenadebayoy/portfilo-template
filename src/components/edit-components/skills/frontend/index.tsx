/** @format */

import { useState, useEffect } from "react";
import {
  Card,
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@packages/_shared";
import { Plus, SquareCheck, X, ChevronDown } from "lucide-react";
import { ImageComponent } from "@/components/imageComponent";
import { useTemplateSelector } from "@/redux/store";
import Modal from "@/components/modal";
import { Skill } from "@/types/types";
import { allSkills } from "@/_shared/_utils/data";

interface SkillsEditorProps {
  defaultSkills?: Skill[];
  className?: string;
  onChange?: (skills: Skill[]) => void;
  renderSkill?: (
    skill: Skill,
    onRemove?: () => void,
    editMode?: boolean
  ) => React.ReactNode;
  containerClassName?: string;
}

export const SkillsEditor = ({
  defaultSkills = [],
  className,
  onChange,
  renderSkill,
  containerClassName,
}: SkillsEditorProps) => {
  const editMode = useTemplateSelector((state) => state.editMode.editMode);
  const [skills, setSkills] = useState<Skill[]>(defaultSkills);
  const [showModal, setShowModal] = useState(false);
  const [tempSkills, setTempSkills] = useState<Skill[]>([]);

  useEffect(() => {
    setSkills(defaultSkills);
  }, [defaultSkills]);

  const handleAddTempSkill = (title: string) => {
    const skill = allSkills.find((s) => s.title === title);
    if (!skill || tempSkills.some((s) => s.title === title)) return;
    setTempSkills((prev) => [...prev, skill]);
  };

  const handleRemoveTempSkill = (title: string) => {
    setTempSkills((prev) => prev.filter((s) => s.title !== title));
  };

  const handleModalClose = () => {
    setShowModal(false);
    if (tempSkills.length) {
      const updatedSkills = [...skills, ...tempSkills];
      setSkills(updatedSkills);
      onChange?.(updatedSkills);
      setTempSkills([]);
    }
  };

  const handleRemoveSkill = (title: string) => {
    const updated = skills.filter((s) => s.title !== title);
    setSkills(updated);
    onChange?.(updated);
  };

  const availableSkills = allSkills.filter(
    (s) =>
      !skills.some((added) => added.title === s.title) &&
      !tempSkills.some((added) => added.title === s.title)
  );
  const defaultRenderSkill = (
    skill: Skill,
    onRemove?: () => void,
    editMode?: boolean
  ) => (
    <Card
      key={skill.title}
      className="group relative flex flex-col justify-center items-center gap-2 text-white h-40 w-52 p-3"
    >
      {skill.icon ? (
        <ImageComponent
          src={skill.icon}
          alt={skill.title}
          width={40}
          height={40}
          className="rounded-sm"
        />
      ) : (
        <SquareCheck className="w-6 h-6 text-black" />
      )}
      <span className="capitalize text-black">{skill.title}</span>
      {editMode && onRemove && (
        <button
          onClick={onRemove}
          className="opacity-0 absolute top-[-5px] right-0 group-hover:opacity-100 w-5 h-5 rounded-full flex justify-center items-center bg-black"
        >
          <X className="w-3 h-3 text-white" />
        </button>
      )}
    </Card>
  );

  return (
    <div className={className}>
      <div className={containerClassName ?? undefined}>
        {skills.map((skill) =>
          renderSkill
            ? renderSkill(skill, () => handleRemoveSkill(skill.title), editMode)
            : defaultRenderSkill(skill, () => handleRemoveSkill(skill.title))
        )}
      </div>

      <div className="flex justify-center mb-4">
        {editMode && (
          <button
            className="flex mt-6 w-8 h-8 justify-center border-primary items-center rounded-full gap-2 border-dashed border cursor-pointer"
            onClick={() => setShowModal(true)}
          >
            <Plus className="w-3 h-3" />
          </button>
        )}
      </div>

      {/* Modal */}
      <Modal
        isOpen={showModal}
        onClose={handleModalClose}
        title="Select Skills"
        className="max-w-[500px]"
      >
        <div className="px-4 py-2">
          <div className="flex flex-wrap gap-3 mb-4">
            {tempSkills.map((skill) => (
              <Card
                key={skill.title}
                className="relative shadow-none rounded-md flex items-center gap-2 p-2"
              >
                {skill.icon ? (
                  <ImageComponent
                    src={skill.icon}
                    alt={skill.title}
                    width={20}
                    height={20}
                    className="rounded-sm"
                  />
                ) : (
                  <SquareCheck className="w-5 h-5" />
                )}
                <span className="text-xs">{skill.title}</span>
                <button
                  className="absolute -top-1 -right-1 bg-black text-white w-4 h-4 flex items-center justify-center rounded-full"
                  onClick={() => handleRemoveTempSkill(skill.title)}
                >
                  <X size={10} />
                </button>
              </Card>
            ))}
          </div>

          <Popover>
            <PopoverTrigger asChild className="w-full">
              <button className="w-full h-10 px-3 py-2 border rounded-md flex items-center justify-between text-sm bg-white text-black">
                Select a skill <ChevronDown className="w-4 h-4" />
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-[--radix-popover-trigger-width] max-h-[200px] overflow-y-auto bg-white rounded-md shadow-md">
              {availableSkills.map((skill) => (
                <button
                  key={skill.title}
                  onClick={() => handleAddTempSkill(skill.title)}
                  className="flex w-full items-center px-3 py-2 hover:bg-gray-100 gap-2  text-sm text-left"
                >
                  {skill.icon ? (
                    <ImageComponent
                      src={skill.icon}
                      alt={skill.title}
                      width={20}
                      height={20}
                      className="rounded-sm"
                    />
                  ) : (
                    <SquareCheck className="w-5 h-5" />
                  )}
                  {skill.title}
                </button>
              ))}
            </PopoverContent>
          </Popover>
        </div>
      </Modal>
    </div>
  );
};
