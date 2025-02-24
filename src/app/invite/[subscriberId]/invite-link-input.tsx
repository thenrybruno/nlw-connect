'use client'

import { IconButton } from "@/components/IconButton";
import { InputRoot, InputIcon, InputField } from "@/components/Input";
import { Link, Copy } from "lucide-react";

interface InviteLinkInputProps {
    inviteLink: string
}

export function InviteLinkInput({ inviteLink }: InviteLinkInputProps) {
    function copyInviteLink() {
        navigator.clipboard.writeText(inviteLink)
    }
    
    return (
        <InputRoot>
            <InputIcon>
                <Link className='size-5' />
            </InputIcon>

            <InputField defaultValue={inviteLink} />

            <IconButton className='-mr-2' onClick={copyInviteLink}>
                <Copy className='size-5' />
            </IconButton>
        </InputRoot>
    )
}