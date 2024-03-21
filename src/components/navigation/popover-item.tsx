import { Optional } from "@/types/utility";

type PopoverItemProps = {
    startContent: React.ReactNode
    children: React.ReactNode
}

export const PopoverItem = ({startContent, children}: Optional<PopoverItemProps, "startContent">) => {


    return (
        <div className="flex flex-row items-center gap-2 cursor-pointer w-full hover:backdrop-brightness-95 p-2 rounded-md">
            {startContent}
            {children}
        </div>
    );
}
