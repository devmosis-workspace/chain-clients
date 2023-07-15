import { DecCoin, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Plan, PlanSDKType } from "../../../cosmos/upgrade/v1beta1/upgrade";
import { ParamChange, ParamChangeSDKType } from "../../../cosmos/params/v1beta1/params";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
export interface MsgCreateIssuer {
  authority: string;
  issuer: string;
  denominations: Denomination[];
}
export interface MsgCreateIssuerSDKType {
  authority: string;
  issuer: string;
  denominations: DenominationSDKType[];
}
export interface Denomination {
  /** base represents the base denom (should be the DenomUnit with exponent = 0). */
  base: string;
  /**
   * display indicates the suggested denom that should be
   * displayed in clients.
   */
  display: string;
  description: string;
}
export interface DenominationSDKType {
  base: string;
  display: string;
  description: string;
}
export interface MsgCreateIssuerResponse {}
export interface MsgCreateIssuerResponseSDKType {}
export interface MsgDestroyIssuer {
  authority: string;
  issuer: string;
}
export interface MsgDestroyIssuerSDKType {
  authority: string;
  issuer: string;
}
export interface MsgDestroyIssuerResponse {}
export interface MsgDestroyIssuerResponseSDKType {}
export interface MsgSetGasPrices {
  authority: string;
  gasPrices: DecCoin[];
}
export interface MsgSetGasPricesSDKType {
  authority: string;
  gas_prices: DecCoinSDKType[];
}
export interface MsgSetGasPricesResponse {}
export interface MsgSetGasPricesResponseSDKType {}
export interface MsgReplaceAuthority {
  authority: string;
  newAuthority: string;
}
export interface MsgReplaceAuthoritySDKType {
  authority: string;
  new_authority: string;
}
export interface MsgReplaceAuthorityResponse {
  newAuthorityAddress: string;
}
export interface MsgReplaceAuthorityResponseSDKType {
  new_authority_address: string;
}
export interface MsgScheduleUpgrade {
  authority: string;
  plan?: Plan;
}
export interface MsgScheduleUpgradeSDKType {
  authority: string;
  plan?: PlanSDKType;
}
export interface MsgScheduleUpgradeResponse {}
export interface MsgScheduleUpgradeResponseSDKType {}
export interface MsgSetParameters {
  authority: string;
  changes: ParamChange[];
}
export interface MsgSetParametersSDKType {
  authority: string;
  changes: ParamChangeSDKType[];
}
export interface MsgSetParametersResponse {}
export interface MsgSetParametersResponseSDKType {}
function createBaseMsgCreateIssuer(): MsgCreateIssuer {
  return {
    authority: "",
    issuer: "",
    denominations: []
  };
}
export const MsgCreateIssuer = {
  encode(message: MsgCreateIssuer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.issuer !== "") {
      writer.uint32(18).string(message.issuer);
    }
    for (const v of message.denominations) {
      Denomination.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgCreateIssuer {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      issuer: isSet(object.issuer) ? String(object.issuer) : "",
      denominations: Array.isArray(object?.denominations) ? object.denominations.map((e: any) => Denomination.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<MsgCreateIssuer>): MsgCreateIssuer {
    const message = createBaseMsgCreateIssuer();
    message.authority = object.authority ?? "";
    message.issuer = object.issuer ?? "";
    message.denominations = object.denominations?.map(e => Denomination.fromPartial(e)) || [];
    return message;
  }
};
function createBaseDenomination(): Denomination {
  return {
    base: "",
    display: "",
    description: ""
  };
}
export const Denomination = {
  encode(message: Denomination, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.base !== "") {
      writer.uint32(10).string(message.base);
    }
    if (message.display !== "") {
      writer.uint32(18).string(message.display);
    }
    if (message.description !== "") {
      writer.uint32(26).string(message.description);
    }
    return writer;
  },
  fromJSON(object: any): Denomination {
    return {
      base: isSet(object.base) ? String(object.base) : "",
      display: isSet(object.display) ? String(object.display) : "",
      description: isSet(object.description) ? String(object.description) : ""
    };
  },
  fromPartial(object: Partial<Denomination>): Denomination {
    const message = createBaseDenomination();
    message.base = object.base ?? "";
    message.display = object.display ?? "";
    message.description = object.description ?? "";
    return message;
  }
};
function createBaseMsgCreateIssuerResponse(): MsgCreateIssuerResponse {
  return {};
}
export const MsgCreateIssuerResponse = {
  encode(_: MsgCreateIssuerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgCreateIssuerResponse {
    return {};
  },
  fromPartial(_: Partial<MsgCreateIssuerResponse>): MsgCreateIssuerResponse {
    const message = createBaseMsgCreateIssuerResponse();
    return message;
  }
};
function createBaseMsgDestroyIssuer(): MsgDestroyIssuer {
  return {
    authority: "",
    issuer: ""
  };
}
export const MsgDestroyIssuer = {
  encode(message: MsgDestroyIssuer, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.issuer !== "") {
      writer.uint32(18).string(message.issuer);
    }
    return writer;
  },
  fromJSON(object: any): MsgDestroyIssuer {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      issuer: isSet(object.issuer) ? String(object.issuer) : ""
    };
  },
  fromPartial(object: Partial<MsgDestroyIssuer>): MsgDestroyIssuer {
    const message = createBaseMsgDestroyIssuer();
    message.authority = object.authority ?? "";
    message.issuer = object.issuer ?? "";
    return message;
  }
};
function createBaseMsgDestroyIssuerResponse(): MsgDestroyIssuerResponse {
  return {};
}
export const MsgDestroyIssuerResponse = {
  encode(_: MsgDestroyIssuerResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgDestroyIssuerResponse {
    return {};
  },
  fromPartial(_: Partial<MsgDestroyIssuerResponse>): MsgDestroyIssuerResponse {
    const message = createBaseMsgDestroyIssuerResponse();
    return message;
  }
};
function createBaseMsgSetGasPrices(): MsgSetGasPrices {
  return {
    authority: "",
    gasPrices: []
  };
}
export const MsgSetGasPrices = {
  encode(message: MsgSetGasPrices, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    for (const v of message.gasPrices) {
      DecCoin.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgSetGasPrices {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      gasPrices: Array.isArray(object?.gasPrices) ? object.gasPrices.map((e: any) => DecCoin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<MsgSetGasPrices>): MsgSetGasPrices {
    const message = createBaseMsgSetGasPrices();
    message.authority = object.authority ?? "";
    message.gasPrices = object.gasPrices?.map(e => DecCoin.fromPartial(e)) || [];
    return message;
  }
};
function createBaseMsgSetGasPricesResponse(): MsgSetGasPricesResponse {
  return {};
}
export const MsgSetGasPricesResponse = {
  encode(_: MsgSetGasPricesResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgSetGasPricesResponse {
    return {};
  },
  fromPartial(_: Partial<MsgSetGasPricesResponse>): MsgSetGasPricesResponse {
    const message = createBaseMsgSetGasPricesResponse();
    return message;
  }
};
function createBaseMsgReplaceAuthority(): MsgReplaceAuthority {
  return {
    authority: "",
    newAuthority: ""
  };
}
export const MsgReplaceAuthority = {
  encode(message: MsgReplaceAuthority, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.newAuthority !== "") {
      writer.uint32(18).string(message.newAuthority);
    }
    return writer;
  },
  fromJSON(object: any): MsgReplaceAuthority {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      newAuthority: isSet(object.newAuthority) ? String(object.newAuthority) : ""
    };
  },
  fromPartial(object: Partial<MsgReplaceAuthority>): MsgReplaceAuthority {
    const message = createBaseMsgReplaceAuthority();
    message.authority = object.authority ?? "";
    message.newAuthority = object.newAuthority ?? "";
    return message;
  }
};
function createBaseMsgReplaceAuthorityResponse(): MsgReplaceAuthorityResponse {
  return {
    newAuthorityAddress: ""
  };
}
export const MsgReplaceAuthorityResponse = {
  encode(message: MsgReplaceAuthorityResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.newAuthorityAddress !== "") {
      writer.uint32(10).string(message.newAuthorityAddress);
    }
    return writer;
  },
  fromJSON(object: any): MsgReplaceAuthorityResponse {
    return {
      newAuthorityAddress: isSet(object.newAuthorityAddress) ? String(object.newAuthorityAddress) : ""
    };
  },
  fromPartial(object: Partial<MsgReplaceAuthorityResponse>): MsgReplaceAuthorityResponse {
    const message = createBaseMsgReplaceAuthorityResponse();
    message.newAuthorityAddress = object.newAuthorityAddress ?? "";
    return message;
  }
};
function createBaseMsgScheduleUpgrade(): MsgScheduleUpgrade {
  return {
    authority: "",
    plan: undefined
  };
}
export const MsgScheduleUpgrade = {
  encode(message: MsgScheduleUpgrade, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.plan !== undefined) {
      Plan.encode(message.plan, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgScheduleUpgrade {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      plan: isSet(object.plan) ? Plan.fromJSON(object.plan) : undefined
    };
  },
  fromPartial(object: Partial<MsgScheduleUpgrade>): MsgScheduleUpgrade {
    const message = createBaseMsgScheduleUpgrade();
    message.authority = object.authority ?? "";
    message.plan = object.plan !== undefined && object.plan !== null ? Plan.fromPartial(object.plan) : undefined;
    return message;
  }
};
function createBaseMsgScheduleUpgradeResponse(): MsgScheduleUpgradeResponse {
  return {};
}
export const MsgScheduleUpgradeResponse = {
  encode(_: MsgScheduleUpgradeResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgScheduleUpgradeResponse {
    return {};
  },
  fromPartial(_: Partial<MsgScheduleUpgradeResponse>): MsgScheduleUpgradeResponse {
    const message = createBaseMsgScheduleUpgradeResponse();
    return message;
  }
};
function createBaseMsgSetParameters(): MsgSetParameters {
  return {
    authority: "",
    changes: []
  };
}
export const MsgSetParameters = {
  encode(message: MsgSetParameters, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    for (const v of message.changes) {
      ParamChange.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgSetParameters {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      changes: Array.isArray(object?.changes) ? object.changes.map((e: any) => ParamChange.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<MsgSetParameters>): MsgSetParameters {
    const message = createBaseMsgSetParameters();
    message.authority = object.authority ?? "";
    message.changes = object.changes?.map(e => ParamChange.fromPartial(e)) || [];
    return message;
  }
};
function createBaseMsgSetParametersResponse(): MsgSetParametersResponse {
  return {};
}
export const MsgSetParametersResponse = {
  encode(_: MsgSetParametersResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgSetParametersResponse {
    return {};
  },
  fromPartial(_: Partial<MsgSetParametersResponse>): MsgSetParametersResponse {
    const message = createBaseMsgSetParametersResponse();
    return message;
  }
};