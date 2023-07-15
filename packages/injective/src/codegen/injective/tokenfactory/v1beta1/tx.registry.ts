import { GeneratedType, Registry } from "@cosmjs/proto-signing";
import { MsgCreateDenom, MsgMint, MsgBurn, MsgChangeAdmin, MsgSetDenomMetadata, MsgUpdateParams } from "./tx";
export const registry: ReadonlyArray<[string, GeneratedType]> = [["/injective.tokenfactory.v1beta1.MsgCreateDenom", MsgCreateDenom], ["/injective.tokenfactory.v1beta1.MsgMint", MsgMint], ["/injective.tokenfactory.v1beta1.MsgBurn", MsgBurn], ["/injective.tokenfactory.v1beta1.MsgChangeAdmin", MsgChangeAdmin], ["/injective.tokenfactory.v1beta1.MsgSetDenomMetadata", MsgSetDenomMetadata], ["/injective.tokenfactory.v1beta1.MsgUpdateParams", MsgUpdateParams]];
export const load = (protoRegistry: Registry) => {
  registry.forEach(([typeUrl, mod]) => {
    protoRegistry.register(typeUrl, mod);
  });
};
export const MessageComposer = {
  encoded: {
    createDenom(value: MsgCreateDenom) {
      return {
        typeUrl: "/injective.tokenfactory.v1beta1.MsgCreateDenom",
        value: MsgCreateDenom.encode(value).finish()
      };
    },
    mint(value: MsgMint) {
      return {
        typeUrl: "/injective.tokenfactory.v1beta1.MsgMint",
        value: MsgMint.encode(value).finish()
      };
    },
    burn(value: MsgBurn) {
      return {
        typeUrl: "/injective.tokenfactory.v1beta1.MsgBurn",
        value: MsgBurn.encode(value).finish()
      };
    },
    changeAdmin(value: MsgChangeAdmin) {
      return {
        typeUrl: "/injective.tokenfactory.v1beta1.MsgChangeAdmin",
        value: MsgChangeAdmin.encode(value).finish()
      };
    },
    setDenomMetadata(value: MsgSetDenomMetadata) {
      return {
        typeUrl: "/injective.tokenfactory.v1beta1.MsgSetDenomMetadata",
        value: MsgSetDenomMetadata.encode(value).finish()
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/injective.tokenfactory.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.encode(value).finish()
      };
    }
  },
  withTypeUrl: {
    createDenom(value: MsgCreateDenom) {
      return {
        typeUrl: "/injective.tokenfactory.v1beta1.MsgCreateDenom",
        value
      };
    },
    mint(value: MsgMint) {
      return {
        typeUrl: "/injective.tokenfactory.v1beta1.MsgMint",
        value
      };
    },
    burn(value: MsgBurn) {
      return {
        typeUrl: "/injective.tokenfactory.v1beta1.MsgBurn",
        value
      };
    },
    changeAdmin(value: MsgChangeAdmin) {
      return {
        typeUrl: "/injective.tokenfactory.v1beta1.MsgChangeAdmin",
        value
      };
    },
    setDenomMetadata(value: MsgSetDenomMetadata) {
      return {
        typeUrl: "/injective.tokenfactory.v1beta1.MsgSetDenomMetadata",
        value
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/injective.tokenfactory.v1beta1.MsgUpdateParams",
        value
      };
    }
  },
  fromJSON: {
    createDenom(value: any) {
      return {
        typeUrl: "/injective.tokenfactory.v1beta1.MsgCreateDenom",
        value: MsgCreateDenom.fromJSON(value)
      };
    },
    mint(value: any) {
      return {
        typeUrl: "/injective.tokenfactory.v1beta1.MsgMint",
        value: MsgMint.fromJSON(value)
      };
    },
    burn(value: any) {
      return {
        typeUrl: "/injective.tokenfactory.v1beta1.MsgBurn",
        value: MsgBurn.fromJSON(value)
      };
    },
    changeAdmin(value: any) {
      return {
        typeUrl: "/injective.tokenfactory.v1beta1.MsgChangeAdmin",
        value: MsgChangeAdmin.fromJSON(value)
      };
    },
    setDenomMetadata(value: any) {
      return {
        typeUrl: "/injective.tokenfactory.v1beta1.MsgSetDenomMetadata",
        value: MsgSetDenomMetadata.fromJSON(value)
      };
    },
    updateParams(value: any) {
      return {
        typeUrl: "/injective.tokenfactory.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.fromJSON(value)
      };
    }
  },
  fromPartial: {
    createDenom(value: MsgCreateDenom) {
      return {
        typeUrl: "/injective.tokenfactory.v1beta1.MsgCreateDenom",
        value: MsgCreateDenom.fromPartial(value)
      };
    },
    mint(value: MsgMint) {
      return {
        typeUrl: "/injective.tokenfactory.v1beta1.MsgMint",
        value: MsgMint.fromPartial(value)
      };
    },
    burn(value: MsgBurn) {
      return {
        typeUrl: "/injective.tokenfactory.v1beta1.MsgBurn",
        value: MsgBurn.fromPartial(value)
      };
    },
    changeAdmin(value: MsgChangeAdmin) {
      return {
        typeUrl: "/injective.tokenfactory.v1beta1.MsgChangeAdmin",
        value: MsgChangeAdmin.fromPartial(value)
      };
    },
    setDenomMetadata(value: MsgSetDenomMetadata) {
      return {
        typeUrl: "/injective.tokenfactory.v1beta1.MsgSetDenomMetadata",
        value: MsgSetDenomMetadata.fromPartial(value)
      };
    },
    updateParams(value: MsgUpdateParams) {
      return {
        typeUrl: "/injective.tokenfactory.v1beta1.MsgUpdateParams",
        value: MsgUpdateParams.fromPartial(value)
      };
    }
  }
};