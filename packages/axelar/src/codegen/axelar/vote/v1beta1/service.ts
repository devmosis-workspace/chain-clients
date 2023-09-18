import { Any, AnyAmino } from "../../../google/protobuf/any";
import { BinaryReader } from "../../../binary";
export const Github_com_cosmos_codec_ProtoMarshaler_InterfaceDecoder = (input: BinaryReader | Uint8Array): Any => {
  const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
  const data = Any.decode(reader, reader.uint32());
  switch (data.typeUrl) {
    default:
      return data;
  }
};
export const Github_com_cosmos_codec_ProtoMarshaler_FromAmino = (content: AnyAmino) => {
  return Any.fromAmino(content);
};
export const Github_com_cosmos_codec_ProtoMarshaler_ToAmino = (content: Any) => {
  return Any.toAmino(content);
};