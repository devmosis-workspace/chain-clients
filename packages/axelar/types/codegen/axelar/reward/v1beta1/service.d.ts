import { Any, AnyAmino } from "../../../google/protobuf/any";
import { BinaryReader } from "../../../binary";
export declare const Refundable_InterfaceDecoder: (input: BinaryReader | Uint8Array) => Any;
export declare const Refundable_FromAmino: (content: AnyAmino) => Any;
export declare const Refundable_ToAmino: (content: Any) => AnyAmino;
