import { MsgCreateProvider, MsgUpdateProvider, MsgDeleteProvider } from "./provider";
export const AminoConverter = {
  "/akash.provider.v1beta3.MsgCreateProvider": {
    aminoType: "/akash.provider.v1beta3.MsgCreateProvider",
    toAmino: MsgCreateProvider.toAmino,
    fromAmino: MsgCreateProvider.fromAmino
  },
  "/akash.provider.v1beta3.MsgUpdateProvider": {
    aminoType: "/akash.provider.v1beta3.MsgUpdateProvider",
    toAmino: MsgUpdateProvider.toAmino,
    fromAmino: MsgUpdateProvider.fromAmino
  },
  "/akash.provider.v1beta3.MsgDeleteProvider": {
    aminoType: "/akash.provider.v1beta3.MsgDeleteProvider",
    toAmino: MsgDeleteProvider.toAmino,
    fromAmino: MsgDeleteProvider.fromAmino
  }
};