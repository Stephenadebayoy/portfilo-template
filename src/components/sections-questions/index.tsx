/** @format */

"use client";

import type React from "react";
import { useState } from "react";

import {
  User,
  Award,
  Briefcase,
  FolderOpen,
  Mail,
  ArrowLeft,
  ArrowRight,
  Check,
  Settings,
} from "lucide-react";
import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Checkbox,
  Progress,
} from "@packages/_shared";
import { Badge } from "@packages/_shared/badge";
import Modal from "../modal";

export interface PortfolioSection {
  key: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  required?: boolean;
  enabled: boolean;
}

export interface PortfolioConfig {
  selectedSections: string[];
  sectionSettings: Record<string, any>;
}

interface PortfolioBuilderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: (config: PortfolioConfig) => void;
  initialConfig?: PortfolioConfig | null;
}

const PORTFOLIO_SECTIONS: PortfolioSection[] = [
  {
    key: "heroSection",
    title: "Hero Section",
    description:
      "Main introduction with your name, title, and key value proposition",
    icon: <User className="w-4 h-4" />,
    required: true,
    enabled: true,
  },
  {
    key: "skillsSection",
    title: "Skills & Expertise",
    description: "Showcase your technical and professional skills",
    icon: <Award className="w-4 h-4" />,
    enabled: true,
  },
  {
    key: "experienceSection",
    title: "Work Experience",
    description: "Professional background and career history",
    icon: <Briefcase className="w-4 h-4" />,
    enabled: true,
  },
  {
    key: "projectsSection",
    title: "Projects & Portfolio",
    description: "Featured projects and case studies",
    icon: <FolderOpen className="w-4 h-4" />,
    enabled: true,
  },
  {
    key: "contactSection",
    title: "Contact Information",
    description: "Ways for people to get in touch with you",
    icon: <Mail className="w-4 h-4" />,
    required: true,
    enabled: true,
  },
];

const STEPS = [
  {
    id: 1,
    title: "Select Sections",
    description: "Choose which sections to include",
  },
  {
    id: 2,
    title: "Configure Sections",
    description: "Customize section settings",
  },
  { id: 3, title: "Review & Confirm", description: "Review your selections" },
];

export const PortfolioBuilderModal: React.FC<PortfolioBuilderModalProps> = ({
  isOpen,
  onClose,
  onComplete,
  initialConfig,
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedSections, setSelectedSections] = useState<string[]>(
    initialConfig?.selectedSections || ["heroSection", "contactSection"]
  );
  const [sectionSettings, setSectionSettings] = useState<Record<string, any>>(
    initialConfig?.sectionSettings || {}
  );

  const progress = (currentStep / STEPS.length) * 100;

  const handleSectionToggle = (sectionKey: string, checked: boolean) => {
    const section = PORTFOLIO_SECTIONS.find((s) => s.key === sectionKey);
    if (section?.required) return;

    if (checked) {
      setSelectedSections((prev) => [...prev, sectionKey]);
    } else {
      setSelectedSections((prev) => prev.filter((key) => key !== sectionKey));
    }
  };

  const handleNext = () => {
    if (currentStep < STEPS.length) {
      setCurrentStep((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleComplete = () => {
    const config: PortfolioConfig = {
      selectedSections,
      sectionSettings,
    };
    onComplete(config);
    onClose();
  };

  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <h3 className="text-lg font-semibold mb-2">
                Choose Your Portfolio Sections
              </h3>
              <p className="text-sm text-muted-foreground">
                Select which sections you want to include in your portfolio
              </p>
            </div>
            <div className="grid gap-4">
              {PORTFOLIO_SECTIONS.map((section) => {
                const isSelected = selectedSections.includes(section.key);

                return (
                  <Card
                    key={section.key}
                    onClick={() => {
                      if (!section.required) {
                        handleSectionToggle(section.key, !isSelected);
                      }
                    }}
                    className={`cursor-pointer border shadow-none border-gray-200 transition-all ${
                      selectedSections.includes(section.key)
                        ? "ring-1 ring-primary bg-primary/5"
                        : "hover:bg-muted/50"
                    } ${section.required ? "opacity-100" : ""}`}
                  >
                    <CardHeader className="pb-3">
                      <div className="flex items-start space-x-3">
                        <Checkbox
                          checked={selectedSections.includes(section.key)}
                          onCheckedChange={(checked) =>
                            handleSectionToggle(section.key, checked as boolean)
                          }
                          disabled={section.required}
                          className="mt-1"
                        />
                        <div className="flex-1">
                          <div className="flex items-center space-x-2 mb-1">
                            {section.icon}
                            <CardTitle className="text-base">
                              {section.title}
                            </CardTitle>
                            {section.required && (
                              <Badge
                                variant="secondary"
                                className="text-xs py-1"
                              >
                                Required
                              </Badge>
                            )}
                          </div>
                          <CardDescription className="text-sm">
                            {section.description}
                          </CardDescription>
                        </div>
                      </div>
                    </CardHeader>
                  </Card>
                );
              })}
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <h3 className="text-lg font-semibold mb-2">
                Configure Your Sections
              </h3>
              <p className="text-sm text-muted-foreground">
                Customize settings for each selected section
              </p>
            </div>
            <div className="space-y-4">
              {selectedSections.map((sectionKey) => {
                const section = PORTFOLIO_SECTIONS.find(
                  (s) => s.key === sectionKey
                );

                if (!section) return null;

                return (
                  <Card key={sectionKey}>
                    <CardHeader>
                      <div className="flex items-center space-x-2">
                        {section.icon}
                        <CardTitle className="text-base">
                          {section.title}
                        </CardTitle>
                        <Settings className="h-4 w-4 text-muted-foreground" />
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3">
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id={`${sectionKey}-visible`}
                            checked={
                              sectionSettings[sectionKey]?.visible !== false
                            }
                            onCheckedChange={(checked) =>
                              setSectionSettings((prev) => ({
                                ...prev,
                                [sectionKey]: {
                                  ...prev[sectionKey],
                                  visible: checked,
                                },
                              }))
                            }
                          />
                          <label
                            htmlFor={`${sectionKey}-visible`}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Show section by default
                          </label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Checkbox
                            id={`${sectionKey}-editable`}
                            checked={
                              sectionSettings[sectionKey]?.editable !== false
                            }
                            onCheckedChange={(checked) =>
                              setSectionSettings((prev) => ({
                                ...prev,
                                [sectionKey]: {
                                  ...prev[sectionKey],
                                  editable: checked,
                                },
                              }))
                            }
                          />
                          <label
                            htmlFor={`${sectionKey}-editable`}
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Allow editing
                          </label>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-4">
            <div className="text-center mb-6">
              <h3 className="text-lg font-semibold mb-2">
                Review Your Portfolio Configuration
              </h3>
              <p className="text-sm text-muted-foreground">
                Confirm your selections before proceeding
              </p>
            </div>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium mb-3">
                  Selected Sections ({selectedSections.length})
                </h4>
                <div className="grid gap-2">
                  {selectedSections.map((sectionKey) => {
                    const section = PORTFOLIO_SECTIONS.find(
                      (s) => s.key === sectionKey
                    );
                    if (!section) return null;

                    const settings = sectionSettings[sectionKey] || {};

                    return (
                      <div
                        key={sectionKey}
                        className="flex items-center justify-between p-3 bg-muted/50 rounded-lg"
                      >
                        <div className="flex items-center space-x-2">
                          <section className="border w-10 h-10 flex justify-center items-center rounded-full">
                            {section.icon}
                          </section>
                          <span className="font-medium text-sm">
                            {section.title}
                          </span>
                          {section.required && (
                            <Badge variant="secondary" className="text-xs">
                              Required
                            </Badge>
                          )}
                        </div>
                        <div className="flex space-x-2">
                          {settings.visible !== false && (
                            <Badge variant="outline" className="text-xs">
                              Visible
                            </Badge>
                          )}
                          {settings.editable !== false && (
                            <Badge variant="outline" className="text-xs">
                              Editable
                            </Badge>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="p-4 bg-primary/5 rounded-lg border border-primary/20">
                <h4 className="font-medium mb-2 flex items-center">
                  <Check className="h-4 w-4 mr-2 text-primary" />
                  Configuration Summary
                </h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• {selectedSections.length} sections selected</li>
                  <li>• All required sections included</li>
                  <li>• Ready for template editing</li>
                </ul>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className="max-w-xl bg-white h-[80vh] flex flex-col p-0"
      closeIcon={false}
      noPadding
    >
      <section className="flex flex-col justify-between h-full">
        <div>
          <section className="flex flex-col h-full w-full">
            <div className="px-6 pb-4 border-b">
              <div className="flex flex-col space-y-1.5 text-center sm:text-left">
                <h1 className="text-lg font-semibold leading-none tracking-tight">
                  Portfolio Template Builder
                </h1>
                <p className="text-sm text-muted-foreground">
                  Configure your portfolio sections and settings
                </p>
              </div>
            </div>
            <div className="p-6 space-y-4 overflow-y-auto flex-1">
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span>
                    Step {currentStep} of {STEPS.length}
                  </span>
                  <span>{Math.round(progress)}% Complete</span>
                </div>
                <Progress value={progress} className="w-full" />
                <div className="flex justify-between text-xs text-muted-foreground">
                  {STEPS.map((step) => (
                    <span
                      key={step.id}
                      className={
                        currentStep >= step.id ? "text-primary font-medium" : ""
                      }
                    >
                      {step.title}
                    </span>
                  ))}
                </div>
              </div>

              <div className="py-4 px-1 h-96 overflow-y-auto">
                {renderStepContent()}
              </div>
            </div>
          </section>
        </div>
        <div>
          <div className="p-6 border-t ">
            <div className="flex justify-between">
              <Button
                variant="outline"
                onClick={handlePrevious}
                disabled={currentStep === 1}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Previous
              </Button>

              <div className="flex space-x-2">
                <Button variant="outline" onClick={onClose}>
                  Cancel
                </Button>
                {currentStep < STEPS.length ? (
                  <Button
                    onClick={handleNext}
                    disabled={selectedSections.length === 0}
                  >
                    Next
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                ) : (
                  <Button onClick={handleComplete}>
                    <Check className="h-4 w-4 mr-2" />
                    Complete Setup
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Modal>
  );
};
