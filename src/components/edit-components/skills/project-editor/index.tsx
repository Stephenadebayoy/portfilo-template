/** @format */

"use client";

import { useState, useEffect, JSX } from "react";
import {
  Button,
  Input,
  Label,
  Checkbox,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Textarea,
} from "@packages/_shared";
import { Plus } from "lucide-react";
import Modal from "@/components/modal";
import { useTemplateSelector } from "@/redux/store";
import { Project } from "@/types/types";
import { allSkills } from "@/_shared/_utils/data";

interface ProjectEditorProps {
  defaultProjects?: Project[];
  className?: string;
  containerClassName?: string;
  onChange?: (projects: Project[]) => void;
  renderProjectCard: (props: {
    project: Project;
    editMode: boolean;
    onEdit: (project: Project) => void;
    onRemove: (id: string) => void;
  }) => JSX.Element;
}

const TAG_COLORS = [
  "bg-blue-100",
  "bg-green-100",
  "bg-pink-100",
  "bg-yellow-100",
  "bg-purple-100",
  "bg-red-100",
];

export const ProjectEditor = ({
  defaultProjects = [],
  className,
  onChange,
  renderProjectCard,
  containerClassName,
}: ProjectEditorProps) => {
  const [projects, setProjects] = useState<Project[]>(defaultProjects);
  const editMode = useTemplateSelector((state) => state.editMode.editMode);

  const [isOpen, setIsOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);

  // Form fields
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [description, setDescription] = useState("");
  const [subDescription, setSubDescription] = useState("");
  const [tags, setTags] = useState<string[]>([]);

  useEffect(() => {
    setProjects(defaultProjects);
  }, [defaultProjects]);

  const resetForm = () => {
    setTitle("");
    setLink("");
    setThumbnail("");
    setDescription("");
    setSubDescription("");
    setTags([]);
    setEditingId(null);
  };

  const openModalForEdit = (project: Project) => {
    setEditingId(project.id);
    setTitle(project.title);
    setLink(project.link);
    setThumbnail(project.thumbnail);
    setDescription(project.description);
    setSubDescription(project.subDescription || "");
    setTags(project.tags || []);
    setIsOpen(true);
  };

  const toggleTag = (tag: string) => {
    setTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const handleAddOrUpdateProject = () => {
    if (!title || !link) return;

    const newProject: Project = {
      id: editingId || Date.now().toString(),
      title,
      link,
      thumbnail,
      description,
      subDescription,
      tags,
    };

    const updated = editingId
      ? projects.map((p) => (p.id === editingId ? newProject : p))
      : [...projects, newProject];

    setProjects(updated);
    onChange?.(updated);
    resetForm();
    setIsOpen(false);
  };

  const handleRemoveProject = (id: string) => {
    const updated = projects.filter((p) => p.id !== id);
    setProjects(updated);
    onChange?.(updated);
  };

  return (
    <div className={className}>
      <div className={containerClassName}>
        {projects.map((project) =>
          renderProjectCard({
            project,
            editMode,
            onEdit: openModalForEdit,
            onRemove: handleRemoveProject,
          })
        )}
      </div>

      {editMode && (
        <section className="flex justify-center">
          <div
            className="flex w-8 h-8 justify-center border-primary items-center rounded-full gap-2 border-dashed border cursor-pointer"
            onClick={() => {
              resetForm();
              setIsOpen(true);
            }}
          >
            <Plus className="w-3 h-3" />
          </div>
        </section>
      )}

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        className="max-w-md pt-2"
        closeIcon={false}
        title={editingId ? "Edit Project" : "Add Project"}
        border
      >
        <section className="px-4 mt-3 space-y-4">
          <div>
            <Label htmlFor="title">Project Title</Label>
            <Input
              id="title"
              placeholder="Enter project/company name"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div>
            <Label htmlFor="link">Project Link (URL)</Label>
            <Input
              id="link"
              placeholder="https://example.com"
              value={link}
              onChange={(e) => setLink(e.target.value)}
              type="url"
            />
          </div>

          <div>
            <Label htmlFor="thumbnail">Thumbnail Image URL</Label>
            <Input
              id="thumbnail"
              placeholder="https://example.com/image.jpg"
              value={thumbnail}
              onChange={(e) => setThumbnail(e.target.value)}
            />
          </div>

          <div>
            <Label htmlFor="description">Description</Label>
            <Textarea
              id="description"
              placeholder="Brief description of the project"
              value={description}
              className="resize-none"
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div>
            <Label htmlFor="subDescription">Sub-description</Label>
            <Input
              id="subDescription"
              placeholder="e.g. Tools used, roles"
              value={subDescription}
              onChange={(e) => setSubDescription(e.target.value)}
            />
          </div>

          <div className="w-full">
            <Label>Tags</Label>
            <Popover>
              <section className="w-full">
                <PopoverTrigger className="w-full p-0 py-0">
                  <div className="w-full border rounded-md border-gray-200 max-h-40 overflow-y-auto py-2 px-4">
                    <div className="flex flex-wrap gap-2">
                      {tags.length > 0 ? (
                        tags.map((tag, index) => (
                          <span
                            key={tag}
                            className={`px-2 py-0.5 text-xs rounded-full text-gray-700 ${
                              TAG_COLORS[index % TAG_COLORS.length]
                            }`}
                          >
                            {tag}
                          </span>
                        ))
                      ) : (
                        <span className="text-gray-400 text-sm">
                          Select tags
                        </span>
                      )}
                    </div>
                  </div>
                </PopoverTrigger>
              </section>
              <section className="w-full">
                <PopoverContent className="w-[--radix-popover-trigger-width] max-h-[200px] overflow-y-auto bg-white rounded-md shadow-md">
                  <div className="flex flex-col gap-2">
                    {allSkills.map((tag) => (
                      <label
                        key={tag.title}
                        className="flex items-center gap-2 cursor-pointer"
                      >
                        <Checkbox
                          checked={tags.includes(tag.title)}
                          onCheckedChange={() => toggleTag(tag.title)}
                          id={`tag-${tag.title}`}
                          disabled={tags.length > 5}
                        />
                        <span className="text-sm">{tag.title}</span>
                      </label>
                    ))}
                  </div>
                </PopoverContent>
              </section>
            </Popover>
          </div>

          <div className="flex items-center gap-4 w-full">
            <Button
              variant="outline"
              onClick={() => setIsOpen(false)}
              className="w-full"
            >
              Cancel
            </Button>
            <Button
              onClick={handleAddOrUpdateProject}
              disabled={!title || !link}
              className="w-full"
            >
              {editingId ? "Update" : "Add"}
            </Button>
          </div>
        </section>
      </Modal>
    </div>
  );
};
