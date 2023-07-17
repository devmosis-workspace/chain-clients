import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsSDKType, IncentiveProgram, IncentiveProgramSDKType } from "./incentive";
import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** MsgClaim represents a account's request to claim pending rewards. */
export interface MsgClaim {
  account: string;
}
/** MsgClaim represents a account's request to claim pending rewards. */
export interface MsgClaimSDKType {
  account: string;
}
/** MsgClaimResponse defines the Msg/Claim response type. */
export interface MsgClaimResponse {
  amount: Coin[];
}
/** MsgClaimResponse defines the Msg/Claim response type. */
export interface MsgClaimResponseSDKType {
  amount: CoinSDKType[];
}
/** MsgBond represents a account's request to bond uToken collateral. */
export interface MsgBond {
  account: string;
  uToken?: Coin;
}
/** MsgBond represents a account's request to bond uToken collateral. */
export interface MsgBondSDKType {
  account: string;
  uToken?: CoinSDKType;
}
/** MsgBondResponse defines the Msg/Lock response type. */
export interface MsgBondResponse {}
/** MsgBondResponse defines the Msg/Lock response type. */
export interface MsgBondResponseSDKType {}
/** MsgBeginUnbonding represents a account's request to begin unbonding uToken collateral. */
export interface MsgBeginUnbonding {
  account: string;
  uToken?: Coin;
}
/** MsgBeginUnbonding represents a account's request to begin unbonding uToken collateral. */
export interface MsgBeginUnbondingSDKType {
  account: string;
  uToken?: CoinSDKType;
}
/** MsgBeginUnbondingResponse defines the Msg/BeginUnbonding response type. */
export interface MsgBeginUnbondingResponse {}
/** MsgBeginUnbondingResponse defines the Msg/BeginUnbonding response type. */
export interface MsgBeginUnbondingResponseSDKType {}
/** MsgEmergencyUnbond represents a account's request to instantly unbond uToken collateral for a fee. */
export interface MsgEmergencyUnbond {
  account: string;
  uToken?: Coin;
}
/** MsgEmergencyUnbond represents a account's request to instantly unbond uToken collateral for a fee. */
export interface MsgEmergencyUnbondSDKType {
  account: string;
  uToken?: CoinSDKType;
}
/** MsgEmergencyUnbondResponse defines the Msg/EmergencyUnbond response type. */
export interface MsgEmergencyUnbondResponse {}
/** MsgEmergencyUnbondResponse defines the Msg/EmergencyUnbond response type. */
export interface MsgEmergencyUnbondResponseSDKType {}
/**
 * MsgSponsor represents a sponsor's request to fund rewards for an incentive program.
 * The program must have been passed by governance, not yet started, and not yet funded.
 * Funded assets must be the full amount required by the program.
 */
export interface MsgSponsor {
  /** Sponsor bech32 account address */
  sponsor: string;
  program: number;
}
/**
 * MsgSponsor represents a sponsor's request to fund rewards for an incentive program.
 * The program must have been passed by governance, not yet started, and not yet funded.
 * Funded assets must be the full amount required by the program.
 */
export interface MsgSponsorSDKType {
  sponsor: string;
  program: number;
}
/** MsgSponsorResponse defines the Msg/Sponsor response type. */
export interface MsgSponsorResponse {}
/** MsgSponsorResponse defines the Msg/Sponsor response type. */
export interface MsgSponsorResponseSDKType {}
/** MsgGovSetParams is used by governance to update module parameters. */
export interface MsgGovSetParams {
  /** authority must be the address of the governance account. */
  authority: string;
  params?: Params;
}
/** MsgGovSetParams is used by governance to update module parameters. */
export interface MsgGovSetParamsSDKType {
  authority: string;
  params?: ParamsSDKType;
}
/** MsgGovSetParamsResponse defines the Msg/SetParams response type. */
export interface MsgGovSetParamsResponse {}
/** MsgGovSetParamsResponse defines the Msg/SetParams response type. */
export interface MsgGovSetParamsResponseSDKType {}
/**
 * MsgGovCreatePrograms is used by governance to create one or more incentive programs.
 * There are two funding scenarios, depending on from_community_fund.
 * If it is true,the programs' total rewards will be automatically withdrawn from
 * the (parameter) community_fund_address to the incentive module account when this
 * message is passed. (Insufficient funds cause the parameter to be treated as false.)
 * If it is false, a MsgSponsor funding each program's full amount must be submitted
 * after this message passes, but before the program's start_time, or the program
 * will be cancelled when it would otherwise start.
 */
export interface MsgGovCreatePrograms {
  /** authority must be the address of the governance account. */
  authority: string;
  programs: IncentiveProgram[];
  /** from_community_fund defines the source of funds for proposed incentive programs. */
  fromCommunityFund: boolean;
}
/**
 * MsgGovCreatePrograms is used by governance to create one or more incentive programs.
 * There are two funding scenarios, depending on from_community_fund.
 * If it is true,the programs' total rewards will be automatically withdrawn from
 * the (parameter) community_fund_address to the incentive module account when this
 * message is passed. (Insufficient funds cause the parameter to be treated as false.)
 * If it is false, a MsgSponsor funding each program's full amount must be submitted
 * after this message passes, but before the program's start_time, or the program
 * will be cancelled when it would otherwise start.
 */
export interface MsgGovCreateProgramsSDKType {
  authority: string;
  programs: IncentiveProgramSDKType[];
  from_community_fund: boolean;
}
/** MsgGovCreateProgramsResponse defines the Msg/CreatePrograms response type. */
export interface MsgGovCreateProgramsResponse {}
/** MsgGovCreateProgramsResponse defines the Msg/CreatePrograms response type. */
export interface MsgGovCreateProgramsResponseSDKType {}
function createBaseMsgClaim(): MsgClaim {
  return {
    account: ""
  };
}
export const MsgClaim = {
  encode(message: MsgClaim, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    return writer;
  },
  fromJSON(object: any): MsgClaim {
    return {
      account: isSet(object.account) ? String(object.account) : ""
    };
  },
  fromPartial(object: Partial<MsgClaim>): MsgClaim {
    const message = createBaseMsgClaim();
    message.account = object.account ?? "";
    return message;
  }
};
function createBaseMsgClaimResponse(): MsgClaimResponse {
  return {
    amount: []
  };
}
export const MsgClaimResponse = {
  encode(message: MsgClaimResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    for (const v of message.amount) {
      Coin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgClaimResponse {
    return {
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromJSON(e)) : []
    };
  },
  fromPartial(object: Partial<MsgClaimResponse>): MsgClaimResponse {
    const message = createBaseMsgClaimResponse();
    message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
    return message;
  }
};
function createBaseMsgBond(): MsgBond {
  return {
    account: "",
    uToken: undefined
  };
}
export const MsgBond = {
  encode(message: MsgBond, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (message.uToken !== undefined) {
      Coin.encode(message.uToken, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgBond {
    return {
      account: isSet(object.account) ? String(object.account) : "",
      uToken: isSet(object.uToken) ? Coin.fromJSON(object.uToken) : undefined
    };
  },
  fromPartial(object: Partial<MsgBond>): MsgBond {
    const message = createBaseMsgBond();
    message.account = object.account ?? "";
    message.uToken = object.uToken !== undefined && object.uToken !== null ? Coin.fromPartial(object.uToken) : undefined;
    return message;
  }
};
function createBaseMsgBondResponse(): MsgBondResponse {
  return {};
}
export const MsgBondResponse = {
  encode(_: MsgBondResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgBondResponse {
    return {};
  },
  fromPartial(_: Partial<MsgBondResponse>): MsgBondResponse {
    const message = createBaseMsgBondResponse();
    return message;
  }
};
function createBaseMsgBeginUnbonding(): MsgBeginUnbonding {
  return {
    account: "",
    uToken: undefined
  };
}
export const MsgBeginUnbonding = {
  encode(message: MsgBeginUnbonding, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (message.uToken !== undefined) {
      Coin.encode(message.uToken, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgBeginUnbonding {
    return {
      account: isSet(object.account) ? String(object.account) : "",
      uToken: isSet(object.uToken) ? Coin.fromJSON(object.uToken) : undefined
    };
  },
  fromPartial(object: Partial<MsgBeginUnbonding>): MsgBeginUnbonding {
    const message = createBaseMsgBeginUnbonding();
    message.account = object.account ?? "";
    message.uToken = object.uToken !== undefined && object.uToken !== null ? Coin.fromPartial(object.uToken) : undefined;
    return message;
  }
};
function createBaseMsgBeginUnbondingResponse(): MsgBeginUnbondingResponse {
  return {};
}
export const MsgBeginUnbondingResponse = {
  encode(_: MsgBeginUnbondingResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgBeginUnbondingResponse {
    return {};
  },
  fromPartial(_: Partial<MsgBeginUnbondingResponse>): MsgBeginUnbondingResponse {
    const message = createBaseMsgBeginUnbondingResponse();
    return message;
  }
};
function createBaseMsgEmergencyUnbond(): MsgEmergencyUnbond {
  return {
    account: "",
    uToken: undefined
  };
}
export const MsgEmergencyUnbond = {
  encode(message: MsgEmergencyUnbond, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (message.uToken !== undefined) {
      Coin.encode(message.uToken, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgEmergencyUnbond {
    return {
      account: isSet(object.account) ? String(object.account) : "",
      uToken: isSet(object.uToken) ? Coin.fromJSON(object.uToken) : undefined
    };
  },
  fromPartial(object: Partial<MsgEmergencyUnbond>): MsgEmergencyUnbond {
    const message = createBaseMsgEmergencyUnbond();
    message.account = object.account ?? "";
    message.uToken = object.uToken !== undefined && object.uToken !== null ? Coin.fromPartial(object.uToken) : undefined;
    return message;
  }
};
function createBaseMsgEmergencyUnbondResponse(): MsgEmergencyUnbondResponse {
  return {};
}
export const MsgEmergencyUnbondResponse = {
  encode(_: MsgEmergencyUnbondResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgEmergencyUnbondResponse {
    return {};
  },
  fromPartial(_: Partial<MsgEmergencyUnbondResponse>): MsgEmergencyUnbondResponse {
    const message = createBaseMsgEmergencyUnbondResponse();
    return message;
  }
};
function createBaseMsgSponsor(): MsgSponsor {
  return {
    sponsor: "",
    program: 0
  };
}
export const MsgSponsor = {
  encode(message: MsgSponsor, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sponsor !== "") {
      writer.uint32(10).string(message.sponsor);
    }
    if (message.program !== 0) {
      writer.uint32(16).uint32(message.program);
    }
    return writer;
  },
  fromJSON(object: any): MsgSponsor {
    return {
      sponsor: isSet(object.sponsor) ? String(object.sponsor) : "",
      program: isSet(object.program) ? Number(object.program) : 0
    };
  },
  fromPartial(object: Partial<MsgSponsor>): MsgSponsor {
    const message = createBaseMsgSponsor();
    message.sponsor = object.sponsor ?? "";
    message.program = object.program ?? 0;
    return message;
  }
};
function createBaseMsgSponsorResponse(): MsgSponsorResponse {
  return {};
}
export const MsgSponsorResponse = {
  encode(_: MsgSponsorResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgSponsorResponse {
    return {};
  },
  fromPartial(_: Partial<MsgSponsorResponse>): MsgSponsorResponse {
    const message = createBaseMsgSponsorResponse();
    return message;
  }
};
function createBaseMsgGovSetParams(): MsgGovSetParams {
  return {
    authority: "",
    params: undefined
  };
}
export const MsgGovSetParams = {
  encode(message: MsgGovSetParams, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MsgGovSetParams {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      params: isSet(object.params) ? Params.fromJSON(object.params) : undefined
    };
  },
  fromPartial(object: Partial<MsgGovSetParams>): MsgGovSetParams {
    const message = createBaseMsgGovSetParams();
    message.authority = object.authority ?? "";
    message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
    return message;
  }
};
function createBaseMsgGovSetParamsResponse(): MsgGovSetParamsResponse {
  return {};
}
export const MsgGovSetParamsResponse = {
  encode(_: MsgGovSetParamsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgGovSetParamsResponse {
    return {};
  },
  fromPartial(_: Partial<MsgGovSetParamsResponse>): MsgGovSetParamsResponse {
    const message = createBaseMsgGovSetParamsResponse();
    return message;
  }
};
function createBaseMsgGovCreatePrograms(): MsgGovCreatePrograms {
  return {
    authority: "",
    programs: [],
    fromCommunityFund: false
  };
}
export const MsgGovCreatePrograms = {
  encode(message: MsgGovCreatePrograms, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.authority !== "") {
      writer.uint32(10).string(message.authority);
    }
    for (const v of message.programs) {
      IncentiveProgram.encode(v!, writer.uint32(18).fork()).ldelim();
    }
    if (message.fromCommunityFund === true) {
      writer.uint32(24).bool(message.fromCommunityFund);
    }
    return writer;
  },
  fromJSON(object: any): MsgGovCreatePrograms {
    return {
      authority: isSet(object.authority) ? String(object.authority) : "",
      programs: Array.isArray(object?.programs) ? object.programs.map((e: any) => IncentiveProgram.fromJSON(e)) : [],
      fromCommunityFund: isSet(object.fromCommunityFund) ? Boolean(object.fromCommunityFund) : false
    };
  },
  fromPartial(object: Partial<MsgGovCreatePrograms>): MsgGovCreatePrograms {
    const message = createBaseMsgGovCreatePrograms();
    message.authority = object.authority ?? "";
    message.programs = object.programs?.map(e => IncentiveProgram.fromPartial(e)) || [];
    message.fromCommunityFund = object.fromCommunityFund ?? false;
    return message;
  }
};
function createBaseMsgGovCreateProgramsResponse(): MsgGovCreateProgramsResponse {
  return {};
}
export const MsgGovCreateProgramsResponse = {
  encode(_: MsgGovCreateProgramsResponse, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    return writer;
  },
  fromJSON(_: any): MsgGovCreateProgramsResponse {
    return {};
  },
  fromPartial(_: Partial<MsgGovCreateProgramsResponse>): MsgGovCreateProgramsResponse {
    const message = createBaseMsgGovCreateProgramsResponse();
    return message;
  }
};