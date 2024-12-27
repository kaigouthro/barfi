import * as React from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";

const Checkbox = React.forwardRef<
    React.ElementRef<typeof CheckboxPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
    <CheckboxPrimitive.Root
        ref={ref}
        className={cn(
            "peer h-4 w-4 shrink-0 rounded-sm border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
            className
        )}
        {...props}
    >
        <CheckboxPrimitive.Indicator
            className={cn("flex items-center justify-center text-current")}
        >
            <CheckIcon className="h-4 w-4" />
        </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
));
Checkbox.displayName = CheckboxPrimitive.Root.displayName;

type FlowCheckboxProps = React.ComponentPropsWithoutRef<
    typeof CheckboxPrimitive.Root
> & {
    label: string;
    defaultChecked?: boolean;
    onCheckedChange?: (checked: boolean) => void;
};

const FlowCheckbox = React.forwardRef<
    React.ElementRef<typeof CheckboxPrimitive.Root>,
    FlowCheckboxProps
>(({ className, label, defaultChecked, ...props }, ref) => (
    <div className="flex items-center space-x-2 pl-0.5">
        <CheckboxPrimitive.Root
            ref={ref}
            className={cn(
                "peer h-4 w-4 shrink-0 rounded border border-primary shadow focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground",
                className
            )}
            defaultChecked={defaultChecked}
            {...props}
        >
            <CheckboxPrimitive.Indicator
                className={cn("flex items-center justify-center text-current")}
            >
                <CheckIcon className="h-4 w-4" />
            </CheckboxPrimitive.Indicator>
        </CheckboxPrimitive.Root>
        <label
            htmlFor={props.id}
            className="text-[12px] peer-disabled:cursor-not-allowed peer-disabled:opacity-70 truncate"
        >
            {label}
        </label>
    </div>
));
FlowCheckbox.displayName = "FlowCheckbox";

export { Checkbox, FlowCheckbox };
