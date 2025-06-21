import { MouseEventHandler, useState } from "react";
import { Button } from "./ui/button";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "./ui/dialog";

export const DeleteDialog = ({ action, text }: { action: MouseEventHandler<HTMLElement>, text: string }) => {
    const [open, setOpen] = useState(false);

    const handleDelete: MouseEventHandler<HTMLElement> = (event) => {
        action(event);
        setOpen(false);
    };

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger className="cursor-pointer">{text}</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                        This action cannot be undone. This will permanently delete the data
                        and remove their data .
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                        <Button type="button" variant="secondary">
                            Close
                        </Button>
                    </DialogClose>
                    <Button type="button" className="ml-2" onClick={handleDelete}>
                        {text}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}