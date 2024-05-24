"use client";

import { Upload, X } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { useDropzone } from "react-dropzone";

import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";

interface FilePreview {
    name: string;
    preview: string;
    size: number;
    type: string;
}

interface OutputType {
    file: string;
    fileName: string;
    fileSize: number;
    fileExtension: string;
}

interface PreviewsProps {
    onChange?: (images: OutputType[]) => void;
    value?: OutputType[];
    disabled?: boolean;
}

const blobUrlToBase64 = async (blobUrl: string): Promise<string> => {
    const response = await fetch(blobUrl);
    const blob = await response.blob();
    return await new Promise<string>((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
            const base64String = reader.result as string;
            resolve(base64String.split(",")[1]); // Extracting base64 data from Data URL
        };
        reader.onerror = reject;
        reader.readAsDataURL(blob);
    });
};

const base64ToBlobUrl = (base64String: string, mimeType: string): string => {
    const byteCharacters = atob(base64String);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
        byteNumbers[i] = byteCharacters.charCodeAt(i);
    }
    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: mimeType });
    return URL.createObjectURL(blob);
};

export const FileUpload: React.FC<PreviewsProps> = (props) => {
    const { onChange, value = [], disabled = false } = props;

    const defaultValue: FilePreview[] = value?.map((item) => ({
        name: item.fileName,
        preview: base64ToBlobUrl(
            item.file,
            "image/" + item.fileExtension.replace(".", ""),
        ),
        size: item.fileSize,
        type: "image/" + item.fileExtension.replace(".", ""),
    }));

    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [files, setFiles] = useState<FilePreview[]>(defaultValue);

    const { getRootProps, getInputProps } = useDropzone({
        accept: { "image/*": [] },
        onDrop: async (acceptedFiles: File[]) => {
            const newFiles = [
                ...files,
                ...acceptedFiles.map((file) =>
                    Object.assign(file, {
                        preview: URL.createObjectURL(file),
                    }),
                ),
            ];

            const newFilesBase64 = (await Promise.all(
                newFiles.map(
                    (item) =>
                        new Promise(async (res, rej) =>
                            res({
                                file: await blobUrlToBase64(item.preview),
                                fileName: item.name,
                                fileSize: item.size,
                                fileExtension: "." + item.type.split("/")[1],
                            }),
                        ),
                ),
            )) as OutputType[];

            setFiles(newFiles);
            onChange?.(newFilesBase64);
        },
    });

    const thumbs = files.map((file: FilePreview, index: number) => (
        <div
            className="relative inline-flex mr-2 mb-2 rounded-[2px] border-[#eaeaea] border-[1px] w-[100px] h-[100px]"
            key={file.name}
        >
            <Button
                className="w-4 h-4 bg-slate-500 rounded-full flex items-center justify-center absolute top-[-6px] right-[-6px]"
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                    e.stopPropagation();

                    const newThumbs = files.filter(
                        (_, itemIndex) => itemIndex !== index,
                    );

                    setFiles(newThumbs);
                }}
            >
                <X className="text-lg" />
            </Button>
            <div className="flex overflow-hidden">
                <Image
                    src={file.preview}
                    width={400}
                    height={300}
                    className="w-auto h-full block"
                    onLoad={() => {
                        URL.revokeObjectURL(file.preview);
                    }}
                    alt={`Thumbnail for ${file.name}`}
                />
            </div>
        </div>
    ));

    useEffect(() => {
        // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
        return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
    }, [files]);

    return (
        <section
            className={cn(
                "w-full border-[1px] p-2 border-gray-600 rounded-md cursor-pointer",
                {
                    "pointer-events-none cursor-default opacity-80": disabled,
                },
            )}
            onClick={() => {
                fileInputRef.current?.click();
            }}
        >
            <div {...getRootProps({ className: "dropzone" })}>
                <input {...getInputProps()} ref={fileInputRef} />
                <p className="text-sm text-center">
                    Drag &apos;n&apos; drop some files here, or click to select
                    files
                </p>
            </div>
            {files?.length === 0 && (
                <div className="flex justify-center items-center  pt-4">
                    <Upload size={80} className="text-gray-500" />
                </div>
            )}
            <div className="flex flex-wrap mt-4">{thumbs}</div>
        </section>
    );
};
