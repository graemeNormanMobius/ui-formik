import { RadioProps, SxProps, TextFieldProps } from '@mui/material';
import React, { ReactNode } from 'react';
export interface RadioInputProps<T = any> {
    /**
     * Input name
     */
    readonly name?: string;
    /**
     * Selected value.
     */
    readonly value: T | undefined;
    /**
     * Called when user selects option.
     */
    readonly onChange: (value: T) => void;
    readonly onBlur?: (e: React.FocusEvent<any>) => void;
    readonly error?: string;
    /**
     * Options to render.
     */
    readonly options: ReadonlyArray<RadioInputOption<T>>;
    /**
     * The label content.
     */
    readonly label?: ReactNode;
    /**
     * The helper text content.
     */
    readonly helperText?: ReactNode;
    /**
     * Display options in a compact row.
     */
    readonly row?: boolean;
    /**
     * If `true`, all radio elements will be disabled.
     */
    readonly disabled?: boolean;
    readonly className?: string;
    /**
     * SX for radio.
     */
    readonly sx?: SxProps;
}
export interface RadioInputOption<T = any> extends Omit<RadioProps, 'name' | 'checked' | 'children'> {
    readonly label: ReactNode;
    readonly value: T | ReturnType<typeof customRadioValue>;
}
type RadioInput = <T>(props: RadioInputProps<T>) => ReactNode;
/**
 * Material-UI Radio with better options support.
 */
export declare const RadioInput: RadioInput;
/**
 * Creates custom radio value.
 *
 * RadioInput will render TextField which allows to enter custom value.
 */
export declare function customRadioValue(props: Omit<TextFieldProps, 'name' | 'label'>): {
    select?: boolean | undefined;
    color?: import("@mui/types").OverridableStringUnion<"error" | "primary" | "secondary" | "success" | "info" | "warning", import("@mui/material").TextFieldPropsColorOverrides> | undefined;
    hidden?: boolean | undefined;
    value?: unknown;
    error?: boolean | undefined;
    key?: React.Key | null | undefined;
    className?: string | undefined;
    style?: React.CSSProperties | undefined;
    classes?: Partial<import("@mui/material").TextFieldClasses> | undefined;
    slot?: string | undefined;
    title?: string | undefined;
    defaultChecked?: boolean | undefined;
    defaultValue?: unknown;
    suppressContentEditableWarning?: boolean | undefined;
    suppressHydrationWarning?: boolean | undefined;
    accessKey?: string | undefined;
    autoFocus?: boolean | undefined;
    contentEditable?: "inherit" | (boolean | "true" | "false") | undefined;
    contextMenu?: string | undefined;
    dir?: string | undefined;
    draggable?: (boolean | "true" | "false") | undefined;
    id?: string | undefined;
    lang?: string | undefined;
    nonce?: string | undefined;
    placeholder?: string | undefined;
    spellCheck?: (boolean | "true" | "false") | undefined;
    tabIndex?: number | undefined;
    translate?: "yes" | "no" | undefined;
    radioGroup?: string | undefined;
    role?: React.AriaRole | undefined;
    about?: string | undefined;
    content?: string | undefined;
    datatype?: string | undefined;
    inlist?: any;
    prefix?: string | undefined;
    property?: string | undefined;
    rel?: string | undefined;
    resource?: string | undefined;
    rev?: string | undefined;
    typeof?: string | undefined;
    vocab?: string | undefined;
    autoCapitalize?: string | undefined;
    autoCorrect?: string | undefined;
    autoSave?: string | undefined;
    itemProp?: string | undefined;
    itemScope?: boolean | undefined;
    itemType?: string | undefined;
    itemID?: string | undefined;
    itemRef?: string | undefined;
    results?: number | undefined;
    security?: string | undefined;
    unselectable?: "on" | "off" | undefined;
    inputMode?: "email" | "search" | "tel" | "text" | "url" | "none" | "numeric" | "decimal" | undefined;
    is?: string | undefined;
    'aria-activedescendant'?: string | undefined;
    'aria-atomic'?: (boolean | "true" | "false") | undefined;
    'aria-autocomplete'?: "list" | "none" | "inline" | "both" | undefined;
    'aria-braillelabel'?: string | undefined;
    'aria-brailleroledescription'?: string | undefined;
    'aria-busy'?: (boolean | "true" | "false") | undefined;
    'aria-checked'?: boolean | "true" | "false" | "mixed" | undefined;
    'aria-colcount'?: number | undefined;
    'aria-colindex'?: number | undefined;
    'aria-colindextext'?: string | undefined;
    'aria-colspan'?: number | undefined;
    'aria-controls'?: string | undefined;
    'aria-current'?: boolean | "date" | "time" | "location" | "page" | "step" | "true" | "false" | undefined;
    'aria-describedby'?: string | undefined;
    'aria-description'?: string | undefined;
    'aria-details'?: string | undefined;
    'aria-disabled'?: (boolean | "true" | "false") | undefined;
    'aria-dropeffect'?: "copy" | "link" | "none" | "execute" | "move" | "popup" | undefined;
    'aria-errormessage'?: string | undefined;
    'aria-expanded'?: (boolean | "true" | "false") | undefined;
    'aria-flowto'?: string | undefined;
    'aria-grabbed'?: (boolean | "true" | "false") | undefined;
    'aria-haspopup'?: boolean | "dialog" | "menu" | "grid" | "true" | "false" | "listbox" | "tree" | undefined;
    'aria-hidden'?: (boolean | "true" | "false") | undefined;
    'aria-invalid'?: boolean | "true" | "false" | "grammar" | "spelling" | undefined;
    'aria-keyshortcuts'?: string | undefined;
    'aria-label'?: string | undefined;
    'aria-labelledby'?: string | undefined;
    'aria-level'?: number | undefined;
    'aria-live'?: "off" | "assertive" | "polite" | undefined;
    'aria-modal'?: (boolean | "true" | "false") | undefined;
    'aria-multiline'?: (boolean | "true" | "false") | undefined;
    'aria-multiselectable'?: (boolean | "true" | "false") | undefined;
    'aria-orientation'?: "horizontal" | "vertical" | undefined;
    'aria-owns'?: string | undefined;
    'aria-placeholder'?: string | undefined;
    'aria-posinset'?: number | undefined;
    'aria-pressed'?: boolean | "true" | "false" | "mixed" | undefined;
    'aria-readonly'?: (boolean | "true" | "false") | undefined;
    'aria-relevant'?: "text" | "all" | "additions" | "additions removals" | "additions text" | "removals" | "removals additions" | "removals text" | "text additions" | "text removals" | undefined;
    'aria-required'?: (boolean | "true" | "false") | undefined;
    'aria-roledescription'?: string | undefined;
    'aria-rowcount'?: number | undefined;
    'aria-rowindex'?: number | undefined;
    'aria-rowindextext'?: string | undefined;
    'aria-rowspan'?: number | undefined;
    'aria-selected'?: (boolean | "true" | "false") | undefined;
    'aria-setsize'?: number | undefined;
    'aria-sort'?: "none" | "ascending" | "descending" | "other" | undefined;
    'aria-valuemax'?: number | undefined;
    'aria-valuemin'?: number | undefined;
    'aria-valuenow'?: number | undefined;
    'aria-valuetext'?: string | undefined;
    children?: React.ReactNode;
    dangerouslySetInnerHTML?: {
        __html: string | TrustedHTML;
    } | undefined;
    onCopy?: React.ClipboardEventHandler<HTMLDivElement> | undefined;
    onCopyCapture?: React.ClipboardEventHandler<HTMLDivElement> | undefined;
    onCut?: React.ClipboardEventHandler<HTMLDivElement> | undefined;
    onCutCapture?: React.ClipboardEventHandler<HTMLDivElement> | undefined;
    onPaste?: React.ClipboardEventHandler<HTMLDivElement> | undefined;
    onPasteCapture?: React.ClipboardEventHandler<HTMLDivElement> | undefined;
    onCompositionEnd?: React.CompositionEventHandler<HTMLDivElement> | undefined;
    onCompositionEndCapture?: React.CompositionEventHandler<HTMLDivElement> | undefined;
    onCompositionStart?: React.CompositionEventHandler<HTMLDivElement> | undefined;
    onCompositionStartCapture?: React.CompositionEventHandler<HTMLDivElement> | undefined;
    onCompositionUpdate?: React.CompositionEventHandler<HTMLDivElement> | undefined;
    onCompositionUpdateCapture?: React.CompositionEventHandler<HTMLDivElement> | undefined;
    onFocus?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined;
    onFocusCapture?: React.FocusEventHandler<HTMLDivElement> | undefined;
    onBlur?: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined;
    onBlurCapture?: React.FocusEventHandler<HTMLDivElement> | undefined;
    onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> | undefined;
    onChangeCapture?: React.FormEventHandler<HTMLDivElement> | undefined;
    onBeforeInput?: React.FormEventHandler<HTMLDivElement> | undefined;
    onBeforeInputCapture?: React.FormEventHandler<HTMLDivElement> | undefined;
    onInput?: React.FormEventHandler<HTMLDivElement> | undefined;
    onInputCapture?: React.FormEventHandler<HTMLDivElement> | undefined;
    onReset?: React.FormEventHandler<HTMLDivElement> | undefined;
    onResetCapture?: React.FormEventHandler<HTMLDivElement> | undefined;
    onSubmit?: React.FormEventHandler<HTMLDivElement> | undefined;
    onSubmitCapture?: React.FormEventHandler<HTMLDivElement> | undefined;
    onInvalid?: React.FormEventHandler<HTMLDivElement> | undefined;
    onInvalidCapture?: React.FormEventHandler<HTMLDivElement> | undefined;
    onLoad?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onLoadCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onError?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onErrorCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onKeyDown?: React.KeyboardEventHandler<HTMLDivElement> | undefined;
    onKeyDownCapture?: React.KeyboardEventHandler<HTMLDivElement> | undefined;
    onKeyPress?: React.KeyboardEventHandler<HTMLDivElement> | undefined;
    onKeyPressCapture?: React.KeyboardEventHandler<HTMLDivElement> | undefined;
    onKeyUp?: React.KeyboardEventHandler<HTMLDivElement> | undefined;
    onKeyUpCapture?: React.KeyboardEventHandler<HTMLDivElement> | undefined;
    onAbort?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onAbortCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onCanPlay?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onCanPlayCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onCanPlayThrough?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onCanPlayThroughCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onDurationChange?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onDurationChangeCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onEmptied?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onEmptiedCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onEncrypted?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onEncryptedCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onEnded?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onEndedCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onLoadedData?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onLoadedDataCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onLoadedMetadata?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onLoadedMetadataCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onLoadStart?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onLoadStartCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onPause?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onPauseCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onPlay?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onPlayCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onPlaying?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onPlayingCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onProgress?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onProgressCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onRateChange?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onRateChangeCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onResize?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onResizeCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onSeeked?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onSeekedCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onSeeking?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onSeekingCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onStalled?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onStalledCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onSuspend?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onSuspendCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onTimeUpdate?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onTimeUpdateCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onVolumeChange?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onVolumeChangeCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onWaiting?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onWaitingCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onAuxClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
    onAuxClickCapture?: React.MouseEventHandler<HTMLDivElement> | undefined;
    onClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
    onClickCapture?: React.MouseEventHandler<HTMLDivElement> | undefined;
    onContextMenu?: React.MouseEventHandler<HTMLDivElement> | undefined;
    onContextMenuCapture?: React.MouseEventHandler<HTMLDivElement> | undefined;
    onDoubleClick?: React.MouseEventHandler<HTMLDivElement> | undefined;
    onDoubleClickCapture?: React.MouseEventHandler<HTMLDivElement> | undefined;
    onDrag?: React.DragEventHandler<HTMLDivElement> | undefined;
    onDragCapture?: React.DragEventHandler<HTMLDivElement> | undefined;
    onDragEnd?: React.DragEventHandler<HTMLDivElement> | undefined;
    onDragEndCapture?: React.DragEventHandler<HTMLDivElement> | undefined;
    onDragEnter?: React.DragEventHandler<HTMLDivElement> | undefined;
    onDragEnterCapture?: React.DragEventHandler<HTMLDivElement> | undefined;
    onDragExit?: React.DragEventHandler<HTMLDivElement> | undefined;
    onDragExitCapture?: React.DragEventHandler<HTMLDivElement> | undefined;
    onDragLeave?: React.DragEventHandler<HTMLDivElement> | undefined;
    onDragLeaveCapture?: React.DragEventHandler<HTMLDivElement> | undefined;
    onDragOver?: React.DragEventHandler<HTMLDivElement> | undefined;
    onDragOverCapture?: React.DragEventHandler<HTMLDivElement> | undefined;
    onDragStart?: React.DragEventHandler<HTMLDivElement> | undefined;
    onDragStartCapture?: React.DragEventHandler<HTMLDivElement> | undefined;
    onDrop?: React.DragEventHandler<HTMLDivElement> | undefined;
    onDropCapture?: React.DragEventHandler<HTMLDivElement> | undefined;
    onMouseDown?: React.MouseEventHandler<HTMLDivElement> | undefined;
    onMouseDownCapture?: React.MouseEventHandler<HTMLDivElement> | undefined;
    onMouseEnter?: React.MouseEventHandler<HTMLDivElement> | undefined;
    onMouseLeave?: React.MouseEventHandler<HTMLDivElement> | undefined;
    onMouseMove?: React.MouseEventHandler<HTMLDivElement> | undefined;
    onMouseMoveCapture?: React.MouseEventHandler<HTMLDivElement> | undefined;
    onMouseOut?: React.MouseEventHandler<HTMLDivElement> | undefined;
    onMouseOutCapture?: React.MouseEventHandler<HTMLDivElement> | undefined;
    onMouseOver?: React.MouseEventHandler<HTMLDivElement> | undefined;
    onMouseOverCapture?: React.MouseEventHandler<HTMLDivElement> | undefined;
    onMouseUp?: React.MouseEventHandler<HTMLDivElement> | undefined;
    onMouseUpCapture?: React.MouseEventHandler<HTMLDivElement> | undefined;
    onSelect?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onSelectCapture?: React.ReactEventHandler<HTMLDivElement> | undefined;
    onTouchCancel?: React.TouchEventHandler<HTMLDivElement> | undefined;
    onTouchCancelCapture?: React.TouchEventHandler<HTMLDivElement> | undefined;
    onTouchEnd?: React.TouchEventHandler<HTMLDivElement> | undefined;
    onTouchEndCapture?: React.TouchEventHandler<HTMLDivElement> | undefined;
    onTouchMove?: React.TouchEventHandler<HTMLDivElement> | undefined;
    onTouchMoveCapture?: React.TouchEventHandler<HTMLDivElement> | undefined;
    onTouchStart?: React.TouchEventHandler<HTMLDivElement> | undefined;
    onTouchStartCapture?: React.TouchEventHandler<HTMLDivElement> | undefined;
    onPointerDown?: React.PointerEventHandler<HTMLDivElement> | undefined;
    onPointerDownCapture?: React.PointerEventHandler<HTMLDivElement> | undefined;
    onPointerMove?: React.PointerEventHandler<HTMLDivElement> | undefined;
    onPointerMoveCapture?: React.PointerEventHandler<HTMLDivElement> | undefined;
    onPointerUp?: React.PointerEventHandler<HTMLDivElement> | undefined;
    onPointerUpCapture?: React.PointerEventHandler<HTMLDivElement> | undefined;
    onPointerCancel?: React.PointerEventHandler<HTMLDivElement> | undefined;
    onPointerCancelCapture?: React.PointerEventHandler<HTMLDivElement> | undefined;
    onPointerEnter?: React.PointerEventHandler<HTMLDivElement> | undefined;
    onPointerEnterCapture?: React.PointerEventHandler<HTMLDivElement> | undefined;
    onPointerLeave?: React.PointerEventHandler<HTMLDivElement> | undefined;
    onPointerLeaveCapture?: React.PointerEventHandler<HTMLDivElement> | undefined;
    onPointerOver?: React.PointerEventHandler<HTMLDivElement> | undefined;
    onPointerOverCapture?: React.PointerEventHandler<HTMLDivElement> | undefined;
    onPointerOut?: React.PointerEventHandler<HTMLDivElement> | undefined;
    onPointerOutCapture?: React.PointerEventHandler<HTMLDivElement> | undefined;
    onGotPointerCapture?: React.PointerEventHandler<HTMLDivElement> | undefined;
    onGotPointerCaptureCapture?: React.PointerEventHandler<HTMLDivElement> | undefined;
    onLostPointerCapture?: React.PointerEventHandler<HTMLDivElement> | undefined;
    onLostPointerCaptureCapture?: React.PointerEventHandler<HTMLDivElement> | undefined;
    onScroll?: React.UIEventHandler<HTMLDivElement> | undefined;
    onScrollCapture?: React.UIEventHandler<HTMLDivElement> | undefined;
    onWheel?: React.WheelEventHandler<HTMLDivElement> | undefined;
    onWheelCapture?: React.WheelEventHandler<HTMLDivElement> | undefined;
    onAnimationStart?: React.AnimationEventHandler<HTMLDivElement> | undefined;
    onAnimationStartCapture?: React.AnimationEventHandler<HTMLDivElement> | undefined;
    onAnimationEnd?: React.AnimationEventHandler<HTMLDivElement> | undefined;
    onAnimationEndCapture?: React.AnimationEventHandler<HTMLDivElement> | undefined;
    onAnimationIteration?: React.AnimationEventHandler<HTMLDivElement> | undefined;
    onAnimationIterationCapture?: React.AnimationEventHandler<HTMLDivElement> | undefined;
    onTransitionEnd?: React.TransitionEventHandler<HTMLDivElement> | undefined;
    onTransitionEndCapture?: React.TransitionEventHandler<HTMLDivElement> | undefined;
    disabled?: boolean | undefined;
    sx?: SxProps<import("@mui/material").Theme> | undefined;
    margin?: "none" | "normal" | "dense" | undefined;
    fullWidth?: boolean | undefined;
    size?: import("@mui/types").OverridableStringUnion<"small" | "medium", import("@mui/material").TextFieldPropsSizeOverrides> | undefined;
    variant?: "outlined" | "filled" | "standard" | undefined;
    ref?: ((instance: HTMLDivElement | null) => void) | React.RefObject<HTMLDivElement> | null | undefined;
    type?: React.HTMLInputTypeAttribute | undefined;
    component?: React.ElementType<any> | undefined;
    autoComplete?: string | undefined;
    required?: boolean | undefined;
    rows?: string | number | undefined;
    focused?: boolean | undefined;
    hiddenLabel?: boolean | undefined;
    SelectProps?: Partial<import("@mui/material").SelectProps<unknown>> | undefined;
    inputProps?: import("@mui/material").InputBaseComponentProps | undefined;
    inputRef?: React.Ref<any> | undefined;
    multiline?: boolean | undefined;
    maxRows?: string | number | undefined;
    minRows?: string | number | undefined;
    InputProps?: Partial<import("@mui/material").FilledInputProps> | Partial<import("@mui/material").InputProps> | Partial<import("@mui/material").OutlinedInputProps> | undefined;
    FormHelperTextProps?: Partial<import("@mui/material").FormHelperTextProps> | undefined;
    helperText?: React.ReactNode;
    InputLabelProps?: Partial<import("@mui/material").InputLabelProps> | undefined;
    __customRadioValue__: boolean;
};
export {};
