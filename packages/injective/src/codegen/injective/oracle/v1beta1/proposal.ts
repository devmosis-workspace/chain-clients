import { BandOracleRequest, BandOracleRequestAmino, BandOracleRequestSDKType, BandIBCParams, BandIBCParamsAmino, BandIBCParamsSDKType } from "./oracle";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface GrantBandOraclePrivilegeProposal {
  $typeUrl?: string;
  title: string;
  description: string;
  relayers: string[];
}
export interface GrantBandOraclePrivilegeProposalProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.GrantBandOraclePrivilegeProposal";
  value: Uint8Array;
}
export interface GrantBandOraclePrivilegeProposalAmino {
  title: string;
  description: string;
  relayers: string[];
}
export interface GrantBandOraclePrivilegeProposalAminoMsg {
  type: "/injective.oracle.v1beta1.GrantBandOraclePrivilegeProposal";
  value: GrantBandOraclePrivilegeProposalAmino;
}
export interface GrantBandOraclePrivilegeProposalSDKType {
  $typeUrl?: string;
  title: string;
  description: string;
  relayers: string[];
}
export interface RevokeBandOraclePrivilegeProposal {
  $typeUrl?: string;
  title: string;
  description: string;
  relayers: string[];
}
export interface RevokeBandOraclePrivilegeProposalProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.RevokeBandOraclePrivilegeProposal";
  value: Uint8Array;
}
export interface RevokeBandOraclePrivilegeProposalAmino {
  title: string;
  description: string;
  relayers: string[];
}
export interface RevokeBandOraclePrivilegeProposalAminoMsg {
  type: "/injective.oracle.v1beta1.RevokeBandOraclePrivilegeProposal";
  value: RevokeBandOraclePrivilegeProposalAmino;
}
export interface RevokeBandOraclePrivilegeProposalSDKType {
  $typeUrl?: string;
  title: string;
  description: string;
  relayers: string[];
}
export interface GrantPriceFeederPrivilegeProposal {
  $typeUrl?: string;
  title: string;
  description: string;
  base: string;
  quote: string;
  relayers: string[];
}
export interface GrantPriceFeederPrivilegeProposalProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.GrantPriceFeederPrivilegeProposal";
  value: Uint8Array;
}
export interface GrantPriceFeederPrivilegeProposalAmino {
  title: string;
  description: string;
  base: string;
  quote: string;
  relayers: string[];
}
export interface GrantPriceFeederPrivilegeProposalAminoMsg {
  type: "/injective.oracle.v1beta1.GrantPriceFeederPrivilegeProposal";
  value: GrantPriceFeederPrivilegeProposalAmino;
}
export interface GrantPriceFeederPrivilegeProposalSDKType {
  $typeUrl?: string;
  title: string;
  description: string;
  base: string;
  quote: string;
  relayers: string[];
}
export interface GrantProviderPrivilegeProposal {
  $typeUrl?: string;
  title: string;
  description: string;
  provider: string;
  relayers: string[];
}
export interface GrantProviderPrivilegeProposalProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.GrantProviderPrivilegeProposal";
  value: Uint8Array;
}
export interface GrantProviderPrivilegeProposalAmino {
  title: string;
  description: string;
  provider: string;
  relayers: string[];
}
export interface GrantProviderPrivilegeProposalAminoMsg {
  type: "/injective.oracle.v1beta1.GrantProviderPrivilegeProposal";
  value: GrantProviderPrivilegeProposalAmino;
}
export interface GrantProviderPrivilegeProposalSDKType {
  $typeUrl?: string;
  title: string;
  description: string;
  provider: string;
  relayers: string[];
}
export interface RevokeProviderPrivilegeProposal {
  $typeUrl?: string;
  title: string;
  description: string;
  provider: string;
  relayers: string[];
}
export interface RevokeProviderPrivilegeProposalProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.RevokeProviderPrivilegeProposal";
  value: Uint8Array;
}
export interface RevokeProviderPrivilegeProposalAmino {
  title: string;
  description: string;
  provider: string;
  relayers: string[];
}
export interface RevokeProviderPrivilegeProposalAminoMsg {
  type: "/injective.oracle.v1beta1.RevokeProviderPrivilegeProposal";
  value: RevokeProviderPrivilegeProposalAmino;
}
export interface RevokeProviderPrivilegeProposalSDKType {
  $typeUrl?: string;
  title: string;
  description: string;
  provider: string;
  relayers: string[];
}
export interface RevokePriceFeederPrivilegeProposal {
  $typeUrl?: string;
  title: string;
  description: string;
  base: string;
  quote: string;
  relayers: string[];
}
export interface RevokePriceFeederPrivilegeProposalProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.RevokePriceFeederPrivilegeProposal";
  value: Uint8Array;
}
export interface RevokePriceFeederPrivilegeProposalAmino {
  title: string;
  description: string;
  base: string;
  quote: string;
  relayers: string[];
}
export interface RevokePriceFeederPrivilegeProposalAminoMsg {
  type: "/injective.oracle.v1beta1.RevokePriceFeederPrivilegeProposal";
  value: RevokePriceFeederPrivilegeProposalAmino;
}
export interface RevokePriceFeederPrivilegeProposalSDKType {
  $typeUrl?: string;
  title: string;
  description: string;
  base: string;
  quote: string;
  relayers: string[];
}
export interface AuthorizeBandOracleRequestProposal {
  $typeUrl?: string;
  title: string;
  description: string;
  request: BandOracleRequest;
}
export interface AuthorizeBandOracleRequestProposalProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.AuthorizeBandOracleRequestProposal";
  value: Uint8Array;
}
export interface AuthorizeBandOracleRequestProposalAmino {
  title: string;
  description: string;
  request?: BandOracleRequestAmino;
}
export interface AuthorizeBandOracleRequestProposalAminoMsg {
  type: "/injective.oracle.v1beta1.AuthorizeBandOracleRequestProposal";
  value: AuthorizeBandOracleRequestProposalAmino;
}
export interface AuthorizeBandOracleRequestProposalSDKType {
  $typeUrl?: string;
  title: string;
  description: string;
  request: BandOracleRequestSDKType;
}
export interface UpdateBandOracleRequestProposal {
  $typeUrl?: string;
  title: string;
  description: string;
  deleteRequestIds: bigint[];
  updateOracleRequest: BandOracleRequest;
}
export interface UpdateBandOracleRequestProposalProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.UpdateBandOracleRequestProposal";
  value: Uint8Array;
}
export interface UpdateBandOracleRequestProposalAmino {
  title: string;
  description: string;
  delete_request_ids: string[];
  update_oracle_request?: BandOracleRequestAmino;
}
export interface UpdateBandOracleRequestProposalAminoMsg {
  type: "/injective.oracle.v1beta1.UpdateBandOracleRequestProposal";
  value: UpdateBandOracleRequestProposalAmino;
}
export interface UpdateBandOracleRequestProposalSDKType {
  $typeUrl?: string;
  title: string;
  description: string;
  delete_request_ids: bigint[];
  update_oracle_request: BandOracleRequestSDKType;
}
export interface EnableBandIBCProposal {
  $typeUrl?: string;
  title: string;
  description: string;
  bandIbcParams: BandIBCParams;
}
export interface EnableBandIBCProposalProtoMsg {
  typeUrl: "/injective.oracle.v1beta1.EnableBandIBCProposal";
  value: Uint8Array;
}
export interface EnableBandIBCProposalAmino {
  title: string;
  description: string;
  band_ibc_params?: BandIBCParamsAmino;
}
export interface EnableBandIBCProposalAminoMsg {
  type: "/injective.oracle.v1beta1.EnableBandIBCProposal";
  value: EnableBandIBCProposalAmino;
}
export interface EnableBandIBCProposalSDKType {
  $typeUrl?: string;
  title: string;
  description: string;
  band_ibc_params: BandIBCParamsSDKType;
}
function createBaseGrantBandOraclePrivilegeProposal(): GrantBandOraclePrivilegeProposal {
  return {
    $typeUrl: "/injective.oracle.v1beta1.GrantBandOraclePrivilegeProposal",
    title: "",
    description: "",
    relayers: []
  };
}
export const GrantBandOraclePrivilegeProposal = {
  typeUrl: "/injective.oracle.v1beta1.GrantBandOraclePrivilegeProposal",
  encode(message: GrantBandOraclePrivilegeProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.relayers) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): GrantBandOraclePrivilegeProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      relayers: Array.isArray(object?.relayers) ? object.relayers.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<GrantBandOraclePrivilegeProposal>): GrantBandOraclePrivilegeProposal {
    const message = createBaseGrantBandOraclePrivilegeProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.relayers = object.relayers?.map(e => e) || [];
    return message;
  },
  fromAmino(object: GrantBandOraclePrivilegeProposalAmino): GrantBandOraclePrivilegeProposal {
    return {
      title: object.title,
      description: object.description,
      relayers: Array.isArray(object?.relayers) ? object.relayers.map((e: any) => e) : []
    };
  },
  toAmino(message: GrantBandOraclePrivilegeProposal): GrantBandOraclePrivilegeProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    if (message.relayers) {
      obj.relayers = message.relayers.map(e => e);
    } else {
      obj.relayers = [];
    }
    return obj;
  },
  fromAminoMsg(object: GrantBandOraclePrivilegeProposalAminoMsg): GrantBandOraclePrivilegeProposal {
    return GrantBandOraclePrivilegeProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: GrantBandOraclePrivilegeProposalProtoMsg): GrantBandOraclePrivilegeProposal {
    return GrantBandOraclePrivilegeProposal.decode(message.value);
  },
  toProto(message: GrantBandOraclePrivilegeProposal): Uint8Array {
    return GrantBandOraclePrivilegeProposal.encode(message).finish();
  },
  toProtoMsg(message: GrantBandOraclePrivilegeProposal): GrantBandOraclePrivilegeProposalProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.GrantBandOraclePrivilegeProposal",
      value: GrantBandOraclePrivilegeProposal.encode(message).finish()
    };
  }
};
function createBaseRevokeBandOraclePrivilegeProposal(): RevokeBandOraclePrivilegeProposal {
  return {
    $typeUrl: "/injective.oracle.v1beta1.RevokeBandOraclePrivilegeProposal",
    title: "",
    description: "",
    relayers: []
  };
}
export const RevokeBandOraclePrivilegeProposal = {
  typeUrl: "/injective.oracle.v1beta1.RevokeBandOraclePrivilegeProposal",
  encode(message: RevokeBandOraclePrivilegeProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.relayers) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): RevokeBandOraclePrivilegeProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      relayers: Array.isArray(object?.relayers) ? object.relayers.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<RevokeBandOraclePrivilegeProposal>): RevokeBandOraclePrivilegeProposal {
    const message = createBaseRevokeBandOraclePrivilegeProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.relayers = object.relayers?.map(e => e) || [];
    return message;
  },
  fromAmino(object: RevokeBandOraclePrivilegeProposalAmino): RevokeBandOraclePrivilegeProposal {
    return {
      title: object.title,
      description: object.description,
      relayers: Array.isArray(object?.relayers) ? object.relayers.map((e: any) => e) : []
    };
  },
  toAmino(message: RevokeBandOraclePrivilegeProposal): RevokeBandOraclePrivilegeProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    if (message.relayers) {
      obj.relayers = message.relayers.map(e => e);
    } else {
      obj.relayers = [];
    }
    return obj;
  },
  fromAminoMsg(object: RevokeBandOraclePrivilegeProposalAminoMsg): RevokeBandOraclePrivilegeProposal {
    return RevokeBandOraclePrivilegeProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: RevokeBandOraclePrivilegeProposalProtoMsg): RevokeBandOraclePrivilegeProposal {
    return RevokeBandOraclePrivilegeProposal.decode(message.value);
  },
  toProto(message: RevokeBandOraclePrivilegeProposal): Uint8Array {
    return RevokeBandOraclePrivilegeProposal.encode(message).finish();
  },
  toProtoMsg(message: RevokeBandOraclePrivilegeProposal): RevokeBandOraclePrivilegeProposalProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.RevokeBandOraclePrivilegeProposal",
      value: RevokeBandOraclePrivilegeProposal.encode(message).finish()
    };
  }
};
function createBaseGrantPriceFeederPrivilegeProposal(): GrantPriceFeederPrivilegeProposal {
  return {
    $typeUrl: "/injective.oracle.v1beta1.GrantPriceFeederPrivilegeProposal",
    title: "",
    description: "",
    base: "",
    quote: "",
    relayers: []
  };
}
export const GrantPriceFeederPrivilegeProposal = {
  typeUrl: "/injective.oracle.v1beta1.GrantPriceFeederPrivilegeProposal",
  encode(message: GrantPriceFeederPrivilegeProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.base !== "") {
      writer.uint32(26).string(message.base);
    }
    if (message.quote !== "") {
      writer.uint32(34).string(message.quote);
    }
    for (const v of message.relayers) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): GrantPriceFeederPrivilegeProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      base: isSet(object.base) ? String(object.base) : "",
      quote: isSet(object.quote) ? String(object.quote) : "",
      relayers: Array.isArray(object?.relayers) ? object.relayers.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<GrantPriceFeederPrivilegeProposal>): GrantPriceFeederPrivilegeProposal {
    const message = createBaseGrantPriceFeederPrivilegeProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.base = object.base ?? "";
    message.quote = object.quote ?? "";
    message.relayers = object.relayers?.map(e => e) || [];
    return message;
  },
  fromAmino(object: GrantPriceFeederPrivilegeProposalAmino): GrantPriceFeederPrivilegeProposal {
    return {
      title: object.title,
      description: object.description,
      base: object.base,
      quote: object.quote,
      relayers: Array.isArray(object?.relayers) ? object.relayers.map((e: any) => e) : []
    };
  },
  toAmino(message: GrantPriceFeederPrivilegeProposal): GrantPriceFeederPrivilegeProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.base = message.base;
    obj.quote = message.quote;
    if (message.relayers) {
      obj.relayers = message.relayers.map(e => e);
    } else {
      obj.relayers = [];
    }
    return obj;
  },
  fromAminoMsg(object: GrantPriceFeederPrivilegeProposalAminoMsg): GrantPriceFeederPrivilegeProposal {
    return GrantPriceFeederPrivilegeProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: GrantPriceFeederPrivilegeProposalProtoMsg): GrantPriceFeederPrivilegeProposal {
    return GrantPriceFeederPrivilegeProposal.decode(message.value);
  },
  toProto(message: GrantPriceFeederPrivilegeProposal): Uint8Array {
    return GrantPriceFeederPrivilegeProposal.encode(message).finish();
  },
  toProtoMsg(message: GrantPriceFeederPrivilegeProposal): GrantPriceFeederPrivilegeProposalProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.GrantPriceFeederPrivilegeProposal",
      value: GrantPriceFeederPrivilegeProposal.encode(message).finish()
    };
  }
};
function createBaseGrantProviderPrivilegeProposal(): GrantProviderPrivilegeProposal {
  return {
    $typeUrl: "/injective.oracle.v1beta1.GrantProviderPrivilegeProposal",
    title: "",
    description: "",
    provider: "",
    relayers: []
  };
}
export const GrantProviderPrivilegeProposal = {
  typeUrl: "/injective.oracle.v1beta1.GrantProviderPrivilegeProposal",
  encode(message: GrantProviderPrivilegeProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.provider !== "") {
      writer.uint32(26).string(message.provider);
    }
    for (const v of message.relayers) {
      writer.uint32(34).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): GrantProviderPrivilegeProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      provider: isSet(object.provider) ? String(object.provider) : "",
      relayers: Array.isArray(object?.relayers) ? object.relayers.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<GrantProviderPrivilegeProposal>): GrantProviderPrivilegeProposal {
    const message = createBaseGrantProviderPrivilegeProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.provider = object.provider ?? "";
    message.relayers = object.relayers?.map(e => e) || [];
    return message;
  },
  fromAmino(object: GrantProviderPrivilegeProposalAmino): GrantProviderPrivilegeProposal {
    return {
      title: object.title,
      description: object.description,
      provider: object.provider,
      relayers: Array.isArray(object?.relayers) ? object.relayers.map((e: any) => e) : []
    };
  },
  toAmino(message: GrantProviderPrivilegeProposal): GrantProviderPrivilegeProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.provider = message.provider;
    if (message.relayers) {
      obj.relayers = message.relayers.map(e => e);
    } else {
      obj.relayers = [];
    }
    return obj;
  },
  fromAminoMsg(object: GrantProviderPrivilegeProposalAminoMsg): GrantProviderPrivilegeProposal {
    return GrantProviderPrivilegeProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: GrantProviderPrivilegeProposalProtoMsg): GrantProviderPrivilegeProposal {
    return GrantProviderPrivilegeProposal.decode(message.value);
  },
  toProto(message: GrantProviderPrivilegeProposal): Uint8Array {
    return GrantProviderPrivilegeProposal.encode(message).finish();
  },
  toProtoMsg(message: GrantProviderPrivilegeProposal): GrantProviderPrivilegeProposalProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.GrantProviderPrivilegeProposal",
      value: GrantProviderPrivilegeProposal.encode(message).finish()
    };
  }
};
function createBaseRevokeProviderPrivilegeProposal(): RevokeProviderPrivilegeProposal {
  return {
    $typeUrl: "/injective.oracle.v1beta1.RevokeProviderPrivilegeProposal",
    title: "",
    description: "",
    provider: "",
    relayers: []
  };
}
export const RevokeProviderPrivilegeProposal = {
  typeUrl: "/injective.oracle.v1beta1.RevokeProviderPrivilegeProposal",
  encode(message: RevokeProviderPrivilegeProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.provider !== "") {
      writer.uint32(26).string(message.provider);
    }
    for (const v of message.relayers) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): RevokeProviderPrivilegeProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      provider: isSet(object.provider) ? String(object.provider) : "",
      relayers: Array.isArray(object?.relayers) ? object.relayers.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<RevokeProviderPrivilegeProposal>): RevokeProviderPrivilegeProposal {
    const message = createBaseRevokeProviderPrivilegeProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.provider = object.provider ?? "";
    message.relayers = object.relayers?.map(e => e) || [];
    return message;
  },
  fromAmino(object: RevokeProviderPrivilegeProposalAmino): RevokeProviderPrivilegeProposal {
    return {
      title: object.title,
      description: object.description,
      provider: object.provider,
      relayers: Array.isArray(object?.relayers) ? object.relayers.map((e: any) => e) : []
    };
  },
  toAmino(message: RevokeProviderPrivilegeProposal): RevokeProviderPrivilegeProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.provider = message.provider;
    if (message.relayers) {
      obj.relayers = message.relayers.map(e => e);
    } else {
      obj.relayers = [];
    }
    return obj;
  },
  fromAminoMsg(object: RevokeProviderPrivilegeProposalAminoMsg): RevokeProviderPrivilegeProposal {
    return RevokeProviderPrivilegeProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: RevokeProviderPrivilegeProposalProtoMsg): RevokeProviderPrivilegeProposal {
    return RevokeProviderPrivilegeProposal.decode(message.value);
  },
  toProto(message: RevokeProviderPrivilegeProposal): Uint8Array {
    return RevokeProviderPrivilegeProposal.encode(message).finish();
  },
  toProtoMsg(message: RevokeProviderPrivilegeProposal): RevokeProviderPrivilegeProposalProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.RevokeProviderPrivilegeProposal",
      value: RevokeProviderPrivilegeProposal.encode(message).finish()
    };
  }
};
function createBaseRevokePriceFeederPrivilegeProposal(): RevokePriceFeederPrivilegeProposal {
  return {
    $typeUrl: "/injective.oracle.v1beta1.RevokePriceFeederPrivilegeProposal",
    title: "",
    description: "",
    base: "",
    quote: "",
    relayers: []
  };
}
export const RevokePriceFeederPrivilegeProposal = {
  typeUrl: "/injective.oracle.v1beta1.RevokePriceFeederPrivilegeProposal",
  encode(message: RevokePriceFeederPrivilegeProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.base !== "") {
      writer.uint32(26).string(message.base);
    }
    if (message.quote !== "") {
      writer.uint32(34).string(message.quote);
    }
    for (const v of message.relayers) {
      writer.uint32(42).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): RevokePriceFeederPrivilegeProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      base: isSet(object.base) ? String(object.base) : "",
      quote: isSet(object.quote) ? String(object.quote) : "",
      relayers: Array.isArray(object?.relayers) ? object.relayers.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<RevokePriceFeederPrivilegeProposal>): RevokePriceFeederPrivilegeProposal {
    const message = createBaseRevokePriceFeederPrivilegeProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.base = object.base ?? "";
    message.quote = object.quote ?? "";
    message.relayers = object.relayers?.map(e => e) || [];
    return message;
  },
  fromAmino(object: RevokePriceFeederPrivilegeProposalAmino): RevokePriceFeederPrivilegeProposal {
    return {
      title: object.title,
      description: object.description,
      base: object.base,
      quote: object.quote,
      relayers: Array.isArray(object?.relayers) ? object.relayers.map((e: any) => e) : []
    };
  },
  toAmino(message: RevokePriceFeederPrivilegeProposal): RevokePriceFeederPrivilegeProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.base = message.base;
    obj.quote = message.quote;
    if (message.relayers) {
      obj.relayers = message.relayers.map(e => e);
    } else {
      obj.relayers = [];
    }
    return obj;
  },
  fromAminoMsg(object: RevokePriceFeederPrivilegeProposalAminoMsg): RevokePriceFeederPrivilegeProposal {
    return RevokePriceFeederPrivilegeProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: RevokePriceFeederPrivilegeProposalProtoMsg): RevokePriceFeederPrivilegeProposal {
    return RevokePriceFeederPrivilegeProposal.decode(message.value);
  },
  toProto(message: RevokePriceFeederPrivilegeProposal): Uint8Array {
    return RevokePriceFeederPrivilegeProposal.encode(message).finish();
  },
  toProtoMsg(message: RevokePriceFeederPrivilegeProposal): RevokePriceFeederPrivilegeProposalProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.RevokePriceFeederPrivilegeProposal",
      value: RevokePriceFeederPrivilegeProposal.encode(message).finish()
    };
  }
};
function createBaseAuthorizeBandOracleRequestProposal(): AuthorizeBandOracleRequestProposal {
  return {
    $typeUrl: "/injective.oracle.v1beta1.AuthorizeBandOracleRequestProposal",
    title: "",
    description: "",
    request: BandOracleRequest.fromPartial({})
  };
}
export const AuthorizeBandOracleRequestProposal = {
  typeUrl: "/injective.oracle.v1beta1.AuthorizeBandOracleRequestProposal",
  encode(message: AuthorizeBandOracleRequestProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.request !== undefined) {
      BandOracleRequest.encode(message.request, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): AuthorizeBandOracleRequestProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      request: isSet(object.request) ? BandOracleRequest.fromJSON(object.request) : undefined
    };
  },
  fromPartial(object: Partial<AuthorizeBandOracleRequestProposal>): AuthorizeBandOracleRequestProposal {
    const message = createBaseAuthorizeBandOracleRequestProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.request = object.request !== undefined && object.request !== null ? BandOracleRequest.fromPartial(object.request) : undefined;
    return message;
  },
  fromAmino(object: AuthorizeBandOracleRequestProposalAmino): AuthorizeBandOracleRequestProposal {
    return {
      title: object.title,
      description: object.description,
      request: object?.request ? BandOracleRequest.fromAmino(object.request) : undefined
    };
  },
  toAmino(message: AuthorizeBandOracleRequestProposal): AuthorizeBandOracleRequestProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.request = message.request ? BandOracleRequest.toAmino(message.request) : undefined;
    return obj;
  },
  fromAminoMsg(object: AuthorizeBandOracleRequestProposalAminoMsg): AuthorizeBandOracleRequestProposal {
    return AuthorizeBandOracleRequestProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: AuthorizeBandOracleRequestProposalProtoMsg): AuthorizeBandOracleRequestProposal {
    return AuthorizeBandOracleRequestProposal.decode(message.value);
  },
  toProto(message: AuthorizeBandOracleRequestProposal): Uint8Array {
    return AuthorizeBandOracleRequestProposal.encode(message).finish();
  },
  toProtoMsg(message: AuthorizeBandOracleRequestProposal): AuthorizeBandOracleRequestProposalProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.AuthorizeBandOracleRequestProposal",
      value: AuthorizeBandOracleRequestProposal.encode(message).finish()
    };
  }
};
function createBaseUpdateBandOracleRequestProposal(): UpdateBandOracleRequestProposal {
  return {
    $typeUrl: "/injective.oracle.v1beta1.UpdateBandOracleRequestProposal",
    title: "",
    description: "",
    deleteRequestIds: [],
    updateOracleRequest: BandOracleRequest.fromPartial({})
  };
}
export const UpdateBandOracleRequestProposal = {
  typeUrl: "/injective.oracle.v1beta1.UpdateBandOracleRequestProposal",
  encode(message: UpdateBandOracleRequestProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    writer.uint32(26).fork();
    for (const v of message.deleteRequestIds) {
      writer.uint64(v);
    }
    writer.ldelim();
    if (message.updateOracleRequest !== undefined) {
      BandOracleRequest.encode(message.updateOracleRequest, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): UpdateBandOracleRequestProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      deleteRequestIds: Array.isArray(object?.deleteRequestIds) ? object.deleteRequestIds.map((e: any) => BigInt(e.toString())) : [],
      updateOracleRequest: isSet(object.updateOracleRequest) ? BandOracleRequest.fromJSON(object.updateOracleRequest) : undefined
    };
  },
  fromPartial(object: Partial<UpdateBandOracleRequestProposal>): UpdateBandOracleRequestProposal {
    const message = createBaseUpdateBandOracleRequestProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.deleteRequestIds = object.deleteRequestIds?.map(e => BigInt(e.toString())) || [];
    message.updateOracleRequest = object.updateOracleRequest !== undefined && object.updateOracleRequest !== null ? BandOracleRequest.fromPartial(object.updateOracleRequest) : undefined;
    return message;
  },
  fromAmino(object: UpdateBandOracleRequestProposalAmino): UpdateBandOracleRequestProposal {
    return {
      title: object.title,
      description: object.description,
      deleteRequestIds: Array.isArray(object?.delete_request_ids) ? object.delete_request_ids.map((e: any) => BigInt(e)) : [],
      updateOracleRequest: object?.update_oracle_request ? BandOracleRequest.fromAmino(object.update_oracle_request) : undefined
    };
  },
  toAmino(message: UpdateBandOracleRequestProposal): UpdateBandOracleRequestProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    if (message.deleteRequestIds) {
      obj.delete_request_ids = message.deleteRequestIds.map(e => e.toString());
    } else {
      obj.delete_request_ids = [];
    }
    obj.update_oracle_request = message.updateOracleRequest ? BandOracleRequest.toAmino(message.updateOracleRequest) : undefined;
    return obj;
  },
  fromAminoMsg(object: UpdateBandOracleRequestProposalAminoMsg): UpdateBandOracleRequestProposal {
    return UpdateBandOracleRequestProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: UpdateBandOracleRequestProposalProtoMsg): UpdateBandOracleRequestProposal {
    return UpdateBandOracleRequestProposal.decode(message.value);
  },
  toProto(message: UpdateBandOracleRequestProposal): Uint8Array {
    return UpdateBandOracleRequestProposal.encode(message).finish();
  },
  toProtoMsg(message: UpdateBandOracleRequestProposal): UpdateBandOracleRequestProposalProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.UpdateBandOracleRequestProposal",
      value: UpdateBandOracleRequestProposal.encode(message).finish()
    };
  }
};
function createBaseEnableBandIBCProposal(): EnableBandIBCProposal {
  return {
    $typeUrl: "/injective.oracle.v1beta1.EnableBandIBCProposal",
    title: "",
    description: "",
    bandIbcParams: BandIBCParams.fromPartial({})
  };
}
export const EnableBandIBCProposal = {
  typeUrl: "/injective.oracle.v1beta1.EnableBandIBCProposal",
  encode(message: EnableBandIBCProposal, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.bandIbcParams !== undefined) {
      BandIBCParams.encode(message.bandIbcParams, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): EnableBandIBCProposal {
    return {
      title: isSet(object.title) ? String(object.title) : "",
      description: isSet(object.description) ? String(object.description) : "",
      bandIbcParams: isSet(object.bandIbcParams) ? BandIBCParams.fromJSON(object.bandIbcParams) : undefined
    };
  },
  fromPartial(object: Partial<EnableBandIBCProposal>): EnableBandIBCProposal {
    const message = createBaseEnableBandIBCProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.bandIbcParams = object.bandIbcParams !== undefined && object.bandIbcParams !== null ? BandIBCParams.fromPartial(object.bandIbcParams) : undefined;
    return message;
  },
  fromAmino(object: EnableBandIBCProposalAmino): EnableBandIBCProposal {
    return {
      title: object.title,
      description: object.description,
      bandIbcParams: object?.band_ibc_params ? BandIBCParams.fromAmino(object.band_ibc_params) : undefined
    };
  },
  toAmino(message: EnableBandIBCProposal): EnableBandIBCProposalAmino {
    const obj: any = {};
    obj.title = message.title;
    obj.description = message.description;
    obj.band_ibc_params = message.bandIbcParams ? BandIBCParams.toAmino(message.bandIbcParams) : undefined;
    return obj;
  },
  fromAminoMsg(object: EnableBandIBCProposalAminoMsg): EnableBandIBCProposal {
    return EnableBandIBCProposal.fromAmino(object.value);
  },
  fromProtoMsg(message: EnableBandIBCProposalProtoMsg): EnableBandIBCProposal {
    return EnableBandIBCProposal.decode(message.value);
  },
  toProto(message: EnableBandIBCProposal): Uint8Array {
    return EnableBandIBCProposal.encode(message).finish();
  },
  toProtoMsg(message: EnableBandIBCProposal): EnableBandIBCProposalProtoMsg {
    return {
      typeUrl: "/injective.oracle.v1beta1.EnableBandIBCProposal",
      value: EnableBandIBCProposal.encode(message).finish()
    };
  }
};