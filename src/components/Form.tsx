import {
    type  ComponentPropsWithoutRef,
    type FormEvent,
    forwardRef,
    useImperativeHandle,
    useRef
} from "react";

type FormProps = ComponentPropsWithoutRef<'form'> & {
    onSave: (value: unknown) => void;
};

export type FormHandle = {
    clear: () => void;
};

const Form = forwardRef<FormHandle, FormProps>(function Form(
    {onSave, children, ...otherProps},
    ref
){
    const form = useRef<HTMLFormElement>(null);

    useImperativeHandle(ref, () => {
        return {
            clear() {
                console.log('CLEARING');
                form.current?.reset();
            },
        };
    });

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData);
        onSave(data);
    }

    return (
        <form onSubmit={handleSubmit} {...otherProps}>
            {children}
        </form>);
});

export default Form;