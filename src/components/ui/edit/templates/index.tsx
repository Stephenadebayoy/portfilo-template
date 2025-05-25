/** @format */

"use client";

import type React from "react";
import { useEffect, useState } from "react";
import {
  Template1Editor,
  Template2Editor,
  Template3Editor,
} from "@/components/templates";
import { templates } from "@/_shared/_utils/data";
import type { Template } from "@/types/types";
import { useParams } from "next/navigation";

// import { useTemplateDispatch, useTemplateSelector } from "@/redux/store";
import { Settings } from "lucide-react";
import {
  Button,
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@packages/_shared";
import {
  PortfolioBuilderModal,
  type PortfolioConfig,
} from "@/components/sections-questions";

const editorsMap: {
  [key: string]: React.FC<{
    data: Template;
    portfolioConfig?: PortfolioConfig;
  }>;
} = {
  "1": Template1Editor,
  "2": Template2Editor,
  "3": Template3Editor,
};

const EditableTemplatesComponent: React.FC = () => {
  const params = useParams();

  const id = params?.templateId;
  const [template, setTemplate] = useState<Template | null>(null);
  const [showBuilderModal, setShowBuilderModal] = useState(false);
  const [portfolioConfig, setPortfolioConfig] =
    useState<PortfolioConfig | null>(null);

  // const dispatch = useTemplateDispatch();
  // const editMode = useTemplateSelector((state) => state.editMode.editMode);

  useEffect(() => {
    if (!id) return;

    const found = templates.find((t) => String(t.id) === id);
    setTemplate(found as any);
  }, [id]);

  const handleBuilderComplete = (config: PortfolioConfig) => {
    setPortfolioConfig(config);
    console.log("Portfolio Configuration:", config);
    console.log("Selected Section Keys:", config.selectedSections);
    console.log("Section Settings:", config.sectionSettings);
  };

  const handleOpenBuilder = () => {
    setShowBuilderModal(true);
  };

  if (!template) return <div>Loading or template not found...</div>;

  const Editor = editorsMap[String(template.id)];

  if (!Editor) return <div>No editor available for this template.</div>;

  return (
    <div className="relative h-screen overflow-y-auto">
      <Editor data={template} portfolioConfig={undefined} />

      <section className="fixed bottom-6 right-6 z-50 flex flex-col gap-2">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                onClick={handleOpenBuilder}
                variant="default"
                size="icon"
                className="rounded-full border border-gray-200 shadow-sm bg-blacky"
              >
                <Settings className="h-4 w-4 text-white" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Configure Sections</TooltipContent>
          </Tooltip>
        </TooltipProvider>

        {/* <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                onClick={() => dispatch(toggleEditMode())}
                variant="default"
              >
                {editMode ? <X /> : <SquarePen />}
              </Button>
            </TooltipTrigger>
            <TooltipContent>{editMode ? "Exit " : "Edit"}</TooltipContent>
          </Tooltip>
        </TooltipProvider> */}
      </section>

      <PortfolioBuilderModal
        isOpen={showBuilderModal}
        onClose={() => setShowBuilderModal(false)}
        onComplete={handleBuilderComplete}
        initialConfig={portfolioConfig}
      />
    </div>
  );
};

export default EditableTemplatesComponent;
