import { Any } from "../../../google/protobuf/any";
import { BinaryReader } from "../../../binary";
export const Github_com_cosmos_codec_ProtoMarshaler_InterfaceDecoder = (input) => {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const data = Any.decode(reader, reader.uint32());
    switch (data.typeUrl) {
        default:
            return data;
    }
};
export const Github_com_cosmos_codec_ProtoMarshaler_FromAmino = (content) => {
    return Any.fromAmino(content);
};
export const Github_com_cosmos_codec_ProtoMarshaler_ToAmino = (content) => {
    return Any.toAmino(content);
};
//# sourceMappingURL=service.js.map