import { Position, Params, ParamsSDKType, positionFromJSON } from "./types";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface MsgOpen {
  signer: string;
  collateralAsset: string;
  collateralAmount: string;
  borrowAsset: string;
  position: Position;
  leverage: string;
}
export interface MsgOpenSDKType {
  signer: string;
  collateral_asset: string;
  collateral_amount: string;
  borrow_asset: string;
  position: Position;
  leverage: string;
}
export interface MsgOpenResponse {}
export interface MsgOpenResponseSDKType {}
export interface MsgClose {
  signer: string;
  id: Long;
}
export interface MsgCloseSDKType {
  signer: string;
  id: Long;
}
export interface MsgCloseResponse {}
export interface MsgCloseResponseSDKType {}
export interface MsgForceClose {
  signer: string;
  mtpAddress: string;
  id: Long;
}
export interface MsgForceCloseSDKType {
  signer: string;
  mtp_address: string;
  id: Long;
}
export interface MsgForceCloseResponse {}
export interface MsgForceCloseResponseSDKType {}
export interface MsgUpdateParams {
  signer: string;
  params?: Params;
}
export interface MsgUpdateParamsSDKType {
  signer: string;
  params?: ParamsSDKType;
}
export interface MsgUpdateParamsResponse {}
export interface MsgUpdateParamsResponseSDKType {}
export interface MsgUpdatePools {
  signer: string;
  pools: string[];
  closedPools: string[];
}
export interface MsgUpdatePoolsSDKType {
  signer: string;
  pools: string[];
  closed_pools: string[];
}
export interface MsgUpdatePoolsResponse {}
export interface MsgUpdatePoolsResponseSDKType {}
export interface MsgUpdateRowanCollateral {
  signer: string;
  rowanCollateralEnabled: boolean;
}
export interface MsgUpdateRowanCollateralSDKType {
  signer: string;
  rowan_collateral_enabled: boolean;
}
export interface MsgUpdateRowanCollateralResponse {}
export interface MsgUpdateRowanCollateralResponseSDKType {}
export interface MsgWhitelist {
  signer: string;
  whitelistedAddress: string;
}
export interface MsgWhitelistSDKType {
  signer: string;
  whitelisted_address: string;
}
export interface MsgWhitelistResponse {}
export interface MsgWhitelistResponseSDKType {}
export interface MsgDewhitelist {
  signer: string;
  whitelistedAddress: string;
}
export interface MsgDewhitelistSDKType {
  signer: string;
  whitelisted_address: string;
}
export interface MsgDewhitelistResponse {}
export interface MsgDewhitelistResponseSDKType {}
export interface MsgAdminCloseAll {
  signer: string;
  takeMarginFund: boolean;
}
export interface MsgAdminCloseAllSDKType {
  signer: string;
  take_margin_fund: boolean;
}
export interface MsgAdminCloseAllResponse {}
export interface MsgAdminCloseAllResponseSDKType {}
export interface MsgAdminClose {
  signer: string;
  mtpAddress: string;
  id: Long;
  takeMarginFund: boolean;
}
export interface MsgAdminCloseSDKType {
  signer: string;
  mtp_address: string;
  id: Long;
  take_margin_fund: boolean;
}
export interface MsgAdminCloseResponse {}
export interface MsgAdminCloseResponseSDKType {}
function createBaseMsgOpen(): MsgOpen {
  return {
    signer: "",
    collateralAsset: "",
    collateralAmount: "",
    borrowAsset: "",
    position: 0,
    leverage: ""
  };
}
export const MsgOpen = {
  encode(message: MsgOpen, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.collateralAsset !== "") {
      writer.uint32(18).string(message.collateralAsset);
    }
    if (message.collateralAmount !== "") {
      writer.uint32(26).string(message.collateralAmount);
    }
    if (message.borrowAsset !== "") {
      writer.uint32(34).string(message.borrowAsset);
    }
    if (message.position !== 0) {
      writer.uint32(40).int32(message.position);
    }
    if (message.leverage !== "") {
      writer.uint32(50).string(message.leverage);
    }
    return writer;
  },
  fromJSON(object: any): MsgOpen {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      collateralAsset: isSet(object.collateralAsset) ? String(object.collateralAsset) : "",
      collateralAmount: isSet(object.collateralAmount) ? String(object.collateralAmount) : "",
      borrowAsset: isSet(object.borrowAsset) ? String(object.borrowAsset) : "",
      position: isSet(object.position) ? positionFromJSON(object.position) : 0,
      leverage: isSet(object.leverage) ? String(object.leverage) : ""
    };
  },
  fromPartial(object: Partial<MsgOpen>): MsgOpen {
    const message = createBaseMsgOpen();
    message.signer = object.signer ?? "";
    message.collateralAsset = object.collateralAsset ?? "";
    message.collateralAmount = object.collateralAmount ?? "";
    message.borrowAsset = object.borrowAsset ?? "";
    message.position = object.position ?? 0;
    message.leverage = object.leverage ?? "";
    return message;
  }
};
function createBaseMsgOpenResponse(): MsgOpenResponse {
  return {};
}
export const MsgOpenResponse = {
  encode(_: MsgOpenResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgOpenResponse {
    return {};
  },
  fromPartial(_: Partial<MsgOpenResponse>): MsgOpenResponse {
    const message = createBaseMsgOpenResponse();
    return message;
  }
};
function createBaseMsgClose(): MsgClose {
  return {
    signer: "",
    id: Long.UZERO
  };
}
export const MsgClose = {
  encode(message: MsgClose, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (!message.id.isZero()) {
      writer.uint32(16).uint64(message.id);
    }
    return writer;
  },
  fromJSON(object: any): MsgClose {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO
    };
  },
  fromPartial(object: Partial<MsgClose>): MsgClose {
    const message = createBaseMsgClose();
    message.signer = object.signer ?? "";
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  }
};
function createBaseMsgCloseResponse(): MsgCloseResponse {
  return {};
}
export const MsgCloseResponse = {
  encode(_: MsgCloseResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgCloseResponse {
    return {};
  },
  fromPartial(_: Partial<MsgCloseResponse>): MsgCloseResponse {
    const message = createBaseMsgCloseResponse();
    return message;
  }
};
function createBaseMsgForceClose(): MsgForceClose {
  return {
    signer: "",
    mtpAddress: "",
    id: Long.UZERO
  };
}
export const MsgForceClose = {
  encode(message: MsgForceClose, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.mtpAddress !== "") {
      writer.uint32(18).string(message.mtpAddress);
    }
    if (!message.id.isZero()) {
      writer.uint32(24).uint64(message.id);
    }
    return writer;
  },
  fromJSON(object: any): MsgForceClose {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      mtpAddress: isSet(object.mtpAddress) ? String(object.mtpAddress) : "",
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO
    };
  },
  fromPartial(object: Partial<MsgForceClose>): MsgForceClose {
    const message = createBaseMsgForceClose();
    message.signer = object.signer ?? "";
    message.mtpAddress = object.mtpAddress ?? "";
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    return message;
  }
};
function createBaseMsgForceCloseResponse(): MsgForceCloseResponse {
  return {};
}
export const MsgForceCloseResponse = {
  encode(_: MsgForceCloseResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgForceCloseResponse {
    return {};
  },
  fromPartial(_: Partial<MsgForceCloseResponse>): MsgForceCloseResponse {
    const message = createBaseMsgForceCloseResponse();
    return message;
  }
};
function createBaseMsgUpdateParams(): MsgUpdateParams {
  return {
    signer: "",
    params: undefined
  };
}
export const MsgUpdateParams = {
  encode(message: MsgUpdateParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateParams {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams {
    const message = createBaseMsgUpdateParams();
    message.signer = object.signer ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }
};
function createBaseMsgUpdateParamsResponse(): MsgUpdateParamsResponse {
  return {};
}
export const MsgUpdateParamsResponse = {
  encode(_: MsgUpdateParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgUpdateParamsResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse {
    const message = createBaseMsgUpdateParamsResponse();
    return message;
  }
};
function createBaseMsgUpdatePools(): MsgUpdatePools {
  return {
    signer: "",
    pools: [],
    closedPools: []
  };
}
export const MsgUpdatePools = {
  encode(message: MsgUpdatePools, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    for (const v of message.pools) {
      writer.uint32(18).string(v!);
    }
    for (const v of message.closedPools) {
      writer.uint32(26).string(v!);
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdatePools {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      pools: Array.isArray(object?.pools) ? object.pools.map((e: any) => String(e)) : [],
      closedPools: Array.isArray(object?.closedPools) ? object.closedPools.map((e: any) => String(e)) : []
    };
  },
  fromPartial(object: Partial<MsgUpdatePools>): MsgUpdatePools {
    const message = createBaseMsgUpdatePools();
    message.signer = object.signer ?? "";
    message.pools = object.pools?.map(e => e) || [];
    message.closedPools = object.closedPools?.map(e => e) || [];
    return message;
  }
};
function createBaseMsgUpdatePoolsResponse(): MsgUpdatePoolsResponse {
  return {};
}
export const MsgUpdatePoolsResponse = {
  encode(_: MsgUpdatePoolsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgUpdatePoolsResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdatePoolsResponse>): MsgUpdatePoolsResponse {
    const message = createBaseMsgUpdatePoolsResponse();
    return message;
  }
};
function createBaseMsgUpdateRowanCollateral(): MsgUpdateRowanCollateral {
  return {
    signer: "",
    rowanCollateralEnabled: false
  };
}
export const MsgUpdateRowanCollateral = {
  encode(message: MsgUpdateRowanCollateral, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.rowanCollateralEnabled === true) {
      writer.uint32(16).bool(message.rowanCollateralEnabled);
    }
    return writer;
  },
  fromJSON(object: any): MsgUpdateRowanCollateral {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      rowanCollateralEnabled: isSet(object.rowanCollateralEnabled) ? Boolean(object.rowanCollateralEnabled) : false
    };
  },
  fromPartial(object: Partial<MsgUpdateRowanCollateral>): MsgUpdateRowanCollateral {
    const message = createBaseMsgUpdateRowanCollateral();
    message.signer = object.signer ?? "";
    message.rowanCollateralEnabled = object.rowanCollateralEnabled ?? false;
    return message;
  }
};
function createBaseMsgUpdateRowanCollateralResponse(): MsgUpdateRowanCollateralResponse {
  return {};
}
export const MsgUpdateRowanCollateralResponse = {
  encode(_: MsgUpdateRowanCollateralResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgUpdateRowanCollateralResponse {
    return {};
  },
  fromPartial(_: Partial<MsgUpdateRowanCollateralResponse>): MsgUpdateRowanCollateralResponse {
    const message = createBaseMsgUpdateRowanCollateralResponse();
    return message;
  }
};
function createBaseMsgWhitelist(): MsgWhitelist {
  return {
    signer: "",
    whitelistedAddress: ""
  };
}
export const MsgWhitelist = {
  encode(message: MsgWhitelist, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.whitelistedAddress !== "") {
      writer.uint32(18).string(message.whitelistedAddress);
    }
    return writer;
  },
  fromJSON(object: any): MsgWhitelist {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      whitelistedAddress: isSet(object.whitelistedAddress) ? String(object.whitelistedAddress) : ""
    };
  },
  fromPartial(object: Partial<MsgWhitelist>): MsgWhitelist {
    const message = createBaseMsgWhitelist();
    message.signer = object.signer ?? "";
    message.whitelistedAddress = object.whitelistedAddress ?? "";
    return message;
  }
};
function createBaseMsgWhitelistResponse(): MsgWhitelistResponse {
  return {};
}
export const MsgWhitelistResponse = {
  encode(_: MsgWhitelistResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgWhitelistResponse {
    return {};
  },
  fromPartial(_: Partial<MsgWhitelistResponse>): MsgWhitelistResponse {
    const message = createBaseMsgWhitelistResponse();
    return message;
  }
};
function createBaseMsgDewhitelist(): MsgDewhitelist {
  return {
    signer: "",
    whitelistedAddress: ""
  };
}
export const MsgDewhitelist = {
  encode(message: MsgDewhitelist, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.whitelistedAddress !== "") {
      writer.uint32(18).string(message.whitelistedAddress);
    }
    return writer;
  },
  fromJSON(object: any): MsgDewhitelist {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      whitelistedAddress: isSet(object.whitelistedAddress) ? String(object.whitelistedAddress) : ""
    };
  },
  fromPartial(object: Partial<MsgDewhitelist>): MsgDewhitelist {
    const message = createBaseMsgDewhitelist();
    message.signer = object.signer ?? "";
    message.whitelistedAddress = object.whitelistedAddress ?? "";
    return message;
  }
};
function createBaseMsgDewhitelistResponse(): MsgDewhitelistResponse {
  return {};
}
export const MsgDewhitelistResponse = {
  encode(_: MsgDewhitelistResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgDewhitelistResponse {
    return {};
  },
  fromPartial(_: Partial<MsgDewhitelistResponse>): MsgDewhitelistResponse {
    const message = createBaseMsgDewhitelistResponse();
    return message;
  }
};
function createBaseMsgAdminCloseAll(): MsgAdminCloseAll {
  return {
    signer: "",
    takeMarginFund: false
  };
}
export const MsgAdminCloseAll = {
  encode(message: MsgAdminCloseAll, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.takeMarginFund === true) {
      writer.uint32(16).bool(message.takeMarginFund);
    }
    return writer;
  },
  fromJSON(object: any): MsgAdminCloseAll {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      takeMarginFund: isSet(object.takeMarginFund) ? Boolean(object.takeMarginFund) : false
    };
  },
  fromPartial(object: Partial<MsgAdminCloseAll>): MsgAdminCloseAll {
    const message = createBaseMsgAdminCloseAll();
    message.signer = object.signer ?? "";
    message.takeMarginFund = object.takeMarginFund ?? false;
    return message;
  }
};
function createBaseMsgAdminCloseAllResponse(): MsgAdminCloseAllResponse {
  return {};
}
export const MsgAdminCloseAllResponse = {
  encode(_: MsgAdminCloseAllResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgAdminCloseAllResponse {
    return {};
  },
  fromPartial(_: Partial<MsgAdminCloseAllResponse>): MsgAdminCloseAllResponse {
    const message = createBaseMsgAdminCloseAllResponse();
    return message;
  }
};
function createBaseMsgAdminClose(): MsgAdminClose {
  return {
    signer: "",
    mtpAddress: "",
    id: Long.UZERO,
    takeMarginFund: false
  };
}
export const MsgAdminClose = {
  encode(message: MsgAdminClose, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.signer !== "") {
      writer.uint32(10).string(message.signer);
    }
    if (message.mtpAddress !== "") {
      writer.uint32(18).string(message.mtpAddress);
    }
    if (!message.id.isZero()) {
      writer.uint32(24).uint64(message.id);
    }
    if (message.takeMarginFund === true) {
      writer.uint32(32).bool(message.takeMarginFund);
    }
    return writer;
  },
  fromJSON(object: any): MsgAdminClose {
    return {
      signer: isSet(object.signer) ? String(object.signer) : "",
      mtpAddress: isSet(object.mtpAddress) ? String(object.mtpAddress) : "",
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      takeMarginFund: isSet(object.takeMarginFund) ? Boolean(object.takeMarginFund) : false
    };
  },
  fromPartial(object: Partial<MsgAdminClose>): MsgAdminClose {
    const message = createBaseMsgAdminClose();
    message.signer = object.signer ?? "";
    message.mtpAddress = object.mtpAddress ?? "";
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.takeMarginFund = object.takeMarginFund ?? false;
    return message;
  }
};
function createBaseMsgAdminCloseResponse(): MsgAdminCloseResponse {
  return {};
}
export const MsgAdminCloseResponse = {
  encode(_: MsgAdminCloseResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgAdminCloseResponse {
    return {};
  },
  fromPartial(_: Partial<MsgAdminCloseResponse>): MsgAdminCloseResponse {
    const message = createBaseMsgAdminCloseResponse();
    return message;
  }
};