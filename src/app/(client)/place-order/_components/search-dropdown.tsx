"use client";

import { CommandList } from "cmdk";
import { Check } from "lucide-react";
import * as React from "react";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import {
    Command,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
} from "@/components/ui/command";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";

export type SearchDropdownItem = {
    value: string;
    label: string;
};

type SearchDropdownProps = {
    values: SearchDropdownItem[];
    label?: string;
    onSubmitAction: (newValue: SearchDropdownItem) => void;
    disabled?: boolean;
    onInputChange?: any;
};

export default function SearchDropdown({
    values,
    label = "Пошук...",
    onSubmitAction,
    disabled = false,
    onInputChange,
}: SearchDropdownProps) {
    const [open, setOpen] = React.useState(false);
    const [currentValue, setValue] = React.useState("");

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[250px] justify-between px-2 border-opacity-80"
                >
                    <span className="max-w-full inline-block whitespace-nowrap overflow-hidden text-ellipsis">
                        {currentValue
                            ? values.find(
                                  (value) => value.label === currentValue,
                              )?.label
                            : label}
                    </span>
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[250px] p-0">
                <Command>
                    <CommandList>
                        <CommandInput
                            onValueChange={onInputChange}
                            placeholder={label}
                            className="h-9"
                        />
                        <CommandEmpty>Даних не знайдено</CommandEmpty>
                        <CommandGroup className="max-h-[300px] overflow-y-scroll">
                            {values.map((value) => (
                                <CommandItem
                                    key={value.value}
                                    value={value.label}
                                    onSelect={(newValue) => {
                                        setValue(newValue);
                                        onSubmitAction(value);
                                        setOpen(false);
                                    }}
                                    disabled={disabled}
                                    className="aria-[selected='true']:bg-primary aria-[selected='true']:text-primary-foreground data-[disabled]:pointer-events-auto data-[disabled]:opacity-100"
                                >
                                    {value.label}
                                    <Check
                                        className={cn(
                                            "ml-auto h-4 w-4",
                                            currentValue === value.label
                                                ? "opacity-100"
                                                : "opacity-0",
                                        )}
                                    />
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
}
