import { BandOracleRequest, BandOracleRequestSDKType, BandIBCParams, BandIBCParamsSDKType } from "./oracle";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface GrantBandOraclePrivilegeProposal {
  title: string;
  description: string;
  relayers: string[];
}
export interface GrantBandOraclePrivilegeProposalSDKType {
  title: string;
  description: string;
  relayers: string[];
}
export interface RevokeBandOraclePrivilegeProposal {
  title: string;
  description: string;
  relayers: string[];
}
export interface RevokeBandOraclePrivilegeProposalSDKType {
  title: string;
  description: string;
  relayers: string[];
}
export interface GrantPriceFeederPrivilegeProposal {
  title: string;
  description: string;
  base: string;
  quote: string;
  relayers: string[];
}
export interface GrantPriceFeederPrivilegeProposalSDKType {
  title: string;
  description: string;
  base: string;
  quote: string;
  relayers: string[];
}
export interface GrantProviderPrivilegeProposal {
  title: string;
  description: string;
  provider: string;
  relayers: string[];
}
export interface GrantProviderPrivilegeProposalSDKType {
  title: string;
  description: string;
  provider: string;
  relayers: string[];
}
export interface RevokeProviderPrivilegeProposal {
  title: string;
  description: string;
  provider: string;
  relayers: string[];
}
export interface RevokeProviderPrivilegeProposalSDKType {
  title: string;
  description: string;
  provider: string;
  relayers: string[];
}
export interface RevokePriceFeederPrivilegeProposal {
  title: string;
  description: string;
  base: string;
  quote: string;
  relayers: string[];
}
export interface RevokePriceFeederPrivilegeProposalSDKType {
  title: string;
  description: string;
  base: string;
  quote: string;
  relayers: string[];
}
export interface AuthorizeBandOracleRequestProposal {
  title: string;
  description: string;
  request?: BandOracleRequest;
}
export interface AuthorizeBandOracleRequestProposalSDKType {
  title: string;
  description: string;
  request?: BandOracleRequestSDKType;
}
export interface UpdateBandOracleRequestProposal {
  title: string;
  description: string;
  deleteRequestIds: Long[];
  updateOracleRequest?: BandOracleRequest;
}
export interface UpdateBandOracleRequestProposalSDKType {
  title: string;
  description: string;
  delete_request_ids: Long[];
  update_oracle_request?: BandOracleRequestSDKType;
}
export interface EnableBandIBCProposal {
  title: string;
  description: string;
  bandIbcParams?: BandIBCParams;
}
export interface EnableBandIBCProposalSDKType {
  title: string;
  description: string;
  band_ibc_params?: BandIBCParamsSDKType;
}
function createBaseGrantBandOraclePrivilegeProposal(): GrantBandOraclePrivilegeProposal {
  return {
    title: "",
    description: "",
    relayers: []
  };
}
export const GrantBandOraclePrivilegeProposal = {
  encode(message: GrantBandOraclePrivilegeProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseRevokeBandOraclePrivilegeProposal(): RevokeBandOraclePrivilegeProposal {
  return {
    title: "",
    description: "",
    relayers: []
  };
}
export const RevokeBandOraclePrivilegeProposal = {
  encode(message: RevokeBandOraclePrivilegeProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseGrantPriceFeederPrivilegeProposal(): GrantPriceFeederPrivilegeProposal {
  return {
    title: "",
    description: "",
    base: "",
    quote: "",
    relayers: []
  };
}
export const GrantPriceFeederPrivilegeProposal = {
  encode(message: GrantPriceFeederPrivilegeProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseGrantProviderPrivilegeProposal(): GrantProviderPrivilegeProposal {
  return {
    title: "",
    description: "",
    provider: "",
    relayers: []
  };
}
export const GrantProviderPrivilegeProposal = {
  encode(message: GrantProviderPrivilegeProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseRevokeProviderPrivilegeProposal(): RevokeProviderPrivilegeProposal {
  return {
    title: "",
    description: "",
    provider: "",
    relayers: []
  };
}
export const RevokeProviderPrivilegeProposal = {
  encode(message: RevokeProviderPrivilegeProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseRevokePriceFeederPrivilegeProposal(): RevokePriceFeederPrivilegeProposal {
  return {
    title: "",
    description: "",
    base: "",
    quote: "",
    relayers: []
  };
}
export const RevokePriceFeederPrivilegeProposal = {
  encode(message: RevokePriceFeederPrivilegeProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseAuthorizeBandOracleRequestProposal(): AuthorizeBandOracleRequestProposal {
  return {
    title: "",
    description: "",
    request: undefined
  };
}
export const AuthorizeBandOracleRequestProposal = {
  encode(message: AuthorizeBandOracleRequestProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseUpdateBandOracleRequestProposal(): UpdateBandOracleRequestProposal {
  return {
    title: "",
    description: "",
    deleteRequestIds: [],
    updateOracleRequest: undefined
  };
}
export const UpdateBandOracleRequestProposal = {
  encode(message: UpdateBandOracleRequestProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
      deleteRequestIds: Array.isArray(object?.deleteRequestIds) ? object.deleteRequestIds.map((e: any) => Long.fromValue(e)) : [],
      updateOracleRequest: isSet(object.updateOracleRequest) ? BandOracleRequest.fromJSON(object.updateOracleRequest) : undefined
    };
  },
  fromPartial(object: Partial<UpdateBandOracleRequestProposal>): UpdateBandOracleRequestProposal {
    const message = createBaseUpdateBandOracleRequestProposal();
    message.title = object.title ?? "";
    message.description = object.description ?? "";
    message.deleteRequestIds = object.deleteRequestIds?.map(e => Long.fromValue(e)) || [];
    message.updateOracleRequest = object.updateOracleRequest !== undefined && object.updateOracleRequest !== null ? BandOracleRequest.fromPartial(object.updateOracleRequest) : undefined;
    return message;
  }
};
function createBaseEnableBandIBCProposal(): EnableBandIBCProposal {
  return {
    title: "",
    description: "",
    bandIbcParams: undefined
  };
}
export const EnableBandIBCProposal = {
  encode(message: EnableBandIBCProposal, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};