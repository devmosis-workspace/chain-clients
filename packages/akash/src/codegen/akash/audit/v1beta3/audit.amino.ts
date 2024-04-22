import { MsgSignProviderAttributes, MsgDeleteProviderAttributes } from "./audit";
export const AminoConverter = {
  "/akash.audit.v1beta3.MsgSignProviderAttributes": {
    aminoType: "/akash.audit.v1beta3.MsgSignProviderAttributes",
    toAmino: MsgSignProviderAttributes.toAmino,
    fromAmino: MsgSignProviderAttributes.fromAmino
  },
  "/akash.audit.v1beta3.MsgDeleteProviderAttributes": {
    aminoType: "/akash.audit.v1beta3.MsgDeleteProviderAttributes",
    toAmino: MsgDeleteProviderAttributes.toAmino,
    fromAmino: MsgDeleteProviderAttributes.fromAmino
  }
};