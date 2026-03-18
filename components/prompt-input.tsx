"use client"

import { cn } from "@/lib/utils";
import { InputGroup, InputGroupAddon, InputGroupButton, InputGroupText, InputGroupTextarea } from "./ui/input-group";
import { Spinner } from "./ui/spinner";
import { CornerDownLeftIcon } from "lucide-react";

interface PropsType {
  promptText: string;
  setPromptText: React.Dispatch<React.SetStateAction<string>>;
  isLoading? : boolean;
  className? : string;
  onSubmit?: () => void;
  hideSubmitBtn? : boolean
}

const PromptInput = ({promptText,setPromptText,isLoading,className,onSubmit,hideSubmitBtn = false} : PropsType) => {
  return (
    <div className="bg-background">
      <InputGroup className={cn("min-h-[172px] rounded-3xl",className)}>
        <InputGroupTextarea className="text-base py-2.5" placeholder="I want to design an app that ..." value={promptText} onChange={(e)=>setPromptText(e.target.value)} />
        <InputGroupAddon align="block-end" className="flex items-center cursor-pointer justify-end">
          {!hideSubmitBtn && (
            <InputGroupButton
              variant="default"
              className="bg-primary cursor-pointer hover:scale-105 hover:bg-secondary transition-all duration-200 group active:scale-95"
              size="sm"
              disabled={!promptText.trim() || isLoading}
              onClick={()=>onSubmit?.()}>
                {isLoading ? (
                  <Spinner />
                ) : (
                  <>
                    <span className="group-hover:text-black">Design</span> <CornerDownLeftIcon className="size-4 text-white group-hover:text-black" />
                  </>
                )}
            </InputGroupButton>
          )}
        </InputGroupAddon>
      </InputGroup>
    </div>
  )
}

export default PromptInput;
