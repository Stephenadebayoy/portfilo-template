/** @format */

import { useState, useEffect } from "react";

import { Mail, DiscIcon as Discord, Plus, Trash2, Edit } from "lucide-react";
import {
  Button,
  Input,
  Label,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@packages/_shared";
import Modal from "@/components/modal";
import { useTemplateSelector } from "@/redux/store";
import { SOCIAL_PLATFORMS } from "@/_shared/_utils/data";

interface SocialMedia {
  platform: string;
  url: string;
}

interface SocialMediaEditorProps {
  defaultSocialMedia?: SocialMedia[];
  className?: string;
  onChange?: (socialMedia: SocialMedia[]) => void;
  renderSocialCard?: (args: {
    social: SocialMedia;
    editMode: boolean;
    onEdit: (platform: string, url: string) => void;
    onRemove: (platform: string) => void;
  }) => React.ReactNode;
}

export const SocialMediaEditor = ({
  defaultSocialMedia = [],
  className,
  onChange,
  renderSocialCard,
}: SocialMediaEditorProps) => {
  const [socialMedia, setSocialMedia] =
    useState<SocialMedia[]>(defaultSocialMedia);
  const editMode = useTemplateSelector((state) => state.editMode.editMode);

  const [isOpen, setIsOpen] = useState(false);
  const [selectedPlatform, setSelectedPlatform] = useState("");
  const [url, setUrl] = useState("");
  const [editingPlatform, setEditingPlatform] = useState<string | null>(null);

  useEffect(() => {
    setSocialMedia(defaultSocialMedia);
  }, [defaultSocialMedia]);

  const handleAddSocial = () => {
    if (selectedPlatform && url) {
      let updated: SocialMedia[];
      if (editingPlatform) {
        updated = socialMedia.map((social) =>
          social.platform === editingPlatform
            ? { platform: selectedPlatform, url }
            : social
        );
      } else {
        updated = [...socialMedia, { platform: selectedPlatform, url }];
      }
      setSocialMedia(updated);
      onChange?.(updated);

      setSelectedPlatform("");
      setUrl("");
      setEditingPlatform(null);
      setIsOpen(false);
    }
  };

  const handleEditSocial = (platform: string, currentUrl: string) => {
    setEditingPlatform(platform);
    setSelectedPlatform(platform);
    setUrl(currentUrl);
    setIsOpen(true);
  };

  const handleRemoveSocial = (platform: string) => {
    const updated = socialMedia.filter(
      (social) => social.platform !== platform
    );
    setSocialMedia(updated);
    onChange?.(updated);
  };

  const getPlaceholder = () => {
    const platform = SOCIAL_PLATFORMS.find((p) => p.value === selectedPlatform);
    return platform?.placeholder || "Enter URL";
  };

  return (
    <div className={className}>
      <div className="flex flex-wrap items-center gap-3 mb-4">
        {socialMedia.map((social) => {
          if (renderSocialCard) {
            return renderSocialCard({
              social,
              editMode,
              onEdit: handleEditSocial,
              onRemove: handleRemoveSocial,
            });
          }

          // fallback default rendering if no renderSocialCard provided
          const IconComponent =
            SOCIAL_PLATFORMS.find((p) => p.value === social.platform)?.icon ||
            Mail;
          return (
            <div
              key={social.platform}
              className="group relative flex items-center gap-2 bg-black text-white rounded-full p-3 transition-colors"
            >
              <IconComponent className="w-5 h-5" />
              <span>{social.url}</span>

              {editMode && (
                <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity flex gap-1">
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-6 bg-white w-6 p-0"
                    onClick={() =>
                      handleEditSocial(social.platform, social.url)
                    }
                  >
                    <Edit className="w-3 h-3" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="h-6 w-6 p-0 bg-white"
                    onClick={() => handleRemoveSocial(social.platform)}
                  >
                    <Trash2 className="w-3 h-3 text-black" />
                  </Button>
                </div>
              )}
            </div>
          );
        })}

        {editMode && (
          <div
            className="flex w-8 h-8 justify-center border-primary items-center rounded-full gap-2 border-dashed border cursor-pointer"
            onClick={() => {
              setEditingPlatform(null);
              setSelectedPlatform("");
              setUrl("");
              setIsOpen(true);
            }}
          >
            <Plus className="w-3 h-3" />
          </div>
        )}
      </div>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        className="max-w-md pt-2"
        closeIcon={false}
        title={editingPlatform ? "Edit Social Media" : "Add Social Media"}
        border
      >
        <section className="px-4 mt-3">
          <div>
            <p className="text-gray-500 text-sm">
              {editingPlatform
                ? "Update your social media link"
                : "Choose a platform and add your profile link"}
            </p>
          </div>

          <div className="space-y-4 mt-3">
            <div className="space-y-2">
              <Label htmlFor="platform">Platform</Label>
              <Select
                value={selectedPlatform}
                onValueChange={setSelectedPlatform}
                disabled={!!editingPlatform}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select a platform" />
                </SelectTrigger>
                <SelectContent className="bg-white">
                  {SOCIAL_PLATFORMS.map((platform) => {
                    const isAlreadyAdded = socialMedia.some(
                      (social) => social.platform === platform.value
                    );

                    return (
                      <SelectItem
                        key={platform.value}
                        value={platform.value}
                        disabled={isAlreadyAdded && !editingPlatform}
                      >
                        <div className="flex items-center gap-2">
                          <platform.icon className="w-4 h-4" />
                          <span>{platform.label}</span>
                          {isAlreadyAdded && !editingPlatform && (
                            <span className="text-xs text-gray-500">
                              (Added)
                            </span>
                          )}
                        </div>
                      </SelectItem>
                    );
                  })}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="url">URL</Label>
              <Input
                id="url"
                placeholder={getPlaceholder()}
                value={url}
                onChange={(e) => setUrl(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center gap-4 mt-6 w-full">
            <Button
              variant="outline"
              onClick={() => setIsOpen(false)}
              className="w-full"
            >
              Cancel
            </Button>
            <Button
              onClick={handleAddSocial}
              disabled={!selectedPlatform || !url}
              className="w-full"
            >
              {editingPlatform ? "Update" : "Add"}
            </Button>
          </div>
        </section>
      </Modal>
    </div>
  );
};
