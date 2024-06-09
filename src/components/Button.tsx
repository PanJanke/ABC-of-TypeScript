import {ComponentPropsWithoutRef} from "react";

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
    href?: never;
};

type AnchorProps = ComponentPropsWithoutRef<'a'>& {
    href?: string;
};

function isAnchorProps(props: AnchorProps| ButtonProps):props is AnchorProps {
    return 'href' in props;
}

export default function Button(props: ButtonProps | AnchorProps) {
    if(isAnchorProps(props)){
        return <a className={"button"} {...props}></a>;
    }
    return <button className={"button"} {...props}></button>;

}

