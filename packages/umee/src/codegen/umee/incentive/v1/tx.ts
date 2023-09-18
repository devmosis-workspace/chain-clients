import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Params, ParamsAmino, ParamsSDKType, IncentiveProgram, IncentiveProgramAmino, IncentiveProgramSDKType } from "./incentive";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** MsgClaim represents a account's request to claim pending rewards. */
export interface MsgClaim {
  account: string;
}
export interface MsgClaimProtoMsg {
  typeUrl: "/umee.incentive.v1.MsgClaim";
  value: Uint8Array;
}
/** MsgClaim represents a account's request to claim pending rewards. */
export interface MsgClaimAmino {
  account: string;
}
export interface MsgClaimAminoMsg {
  type: "/umee.incentive.v1.MsgClaim";
  value: MsgClaimAmino;
}
/** MsgClaim represents a account's request to claim pending rewards. */
export interface MsgClaimSDKType {
  account: string;
}
/** MsgClaimResponse defines the Msg/Claim response type. */
export interface MsgClaimResponse {
  amount: Coin[];
}
export interface MsgClaimResponseProtoMsg {
  typeUrl: "/umee.incentive.v1.MsgClaimResponse";
  value: Uint8Array;
}
/** MsgClaimResponse defines the Msg/Claim response type. */
export interface MsgClaimResponseAmino {
  amount: CoinAmino[];
}
export interface MsgClaimResponseAminoMsg {
  type: "/umee.incentive.v1.MsgClaimResponse";
  value: MsgClaimResponseAmino;
}
/** MsgClaimResponse defines the Msg/Claim response type. */
export interface MsgClaimResponseSDKType {
  amount: CoinSDKType[];
}
/** MsgBond represents a account's request to bond uToken collateral. */
export interface MsgBond {
  account: string;
  uToken: Coin;
}
export interface MsgBondProtoMsg {
  typeUrl: "/umee.incentive.v1.MsgBond";
  value: Uint8Array;
}
/** MsgBond represents a account's request to bond uToken collateral. */
export interface MsgBondAmino {
  account: string;
  uToken?: CoinAmino;
}
export interface MsgBondAminoMsg {
  type: "/umee.incentive.v1.MsgBond";
  value: MsgBondAmino;
}
/** MsgBond represents a account's request to bond uToken collateral. */
export interface MsgBondSDKType {
  account: string;
  uToken: CoinSDKType;
}
/** MsgBondResponse defines the Msg/Lock response type. */
export interface MsgBondResponse {}
export interface MsgBondResponseProtoMsg {
  typeUrl: "/umee.incentive.v1.MsgBondResponse";
  value: Uint8Array;
}
/** MsgBondResponse defines the Msg/Lock response type. */
export interface MsgBondResponseAmino {}
export interface MsgBondResponseAminoMsg {
  type: "/umee.incentive.v1.MsgBondResponse";
  value: MsgBondResponseAmino;
}
/** MsgBondResponse defines the Msg/Lock response type. */
export interface MsgBondResponseSDKType {}
/** MsgBeginUnbonding represents a account's request to begin unbonding uToken collateral. */
export interface MsgBeginUnbonding {
  account: string;
  uToken: Coin;
}
export interface MsgBeginUnbondingProtoMsg {
  typeUrl: "/umee.incentive.v1.MsgBeginUnbonding";
  value: Uint8Array;
}
/** MsgBeginUnbonding represents a account's request to begin unbonding uToken collateral. */
export interface MsgBeginUnbondingAmino {
  account: string;
  uToken?: CoinAmino;
}
export interface MsgBeginUnbondingAminoMsg {
  type: "/umee.incentive.v1.MsgBeginUnbonding";
  value: MsgBeginUnbondingAmino;
}
/** MsgBeginUnbonding represents a account's request to begin unbonding uToken collateral. */
export interface MsgBeginUnbondingSDKType {
  account: string;
  uToken: CoinSDKType;
}
/** MsgBeginUnbondingResponse defines the Msg/BeginUnbonding response type. */
export interface MsgBeginUnbondingResponse {}
export interface MsgBeginUnbondingResponseProtoMsg {
  typeUrl: "/umee.incentive.v1.MsgBeginUnbondingResponse";
  value: Uint8Array;
}
/** MsgBeginUnbondingResponse defines the Msg/BeginUnbonding response type. */
export interface MsgBeginUnbondingResponseAmino {}
export interface MsgBeginUnbondingResponseAminoMsg {
  type: "/umee.incentive.v1.MsgBeginUnbondingResponse";
  value: MsgBeginUnbondingResponseAmino;
}
/** MsgBeginUnbondingResponse defines the Msg/BeginUnbonding response type. */
export interface MsgBeginUnbondingResponseSDKType {}
/** MsgEmergencyUnbond represents a account's request to instantly unbond uToken collateral for a fee. */
export interface MsgEmergencyUnbond {
  account: string;
  uToken: Coin;
}
export interface MsgEmergencyUnbondProtoMsg {
  typeUrl: "/umee.incentive.v1.MsgEmergencyUnbond";
  value: Uint8Array;
}
/** MsgEmergencyUnbond represents a account's request to instantly unbond uToken collateral for a fee. */
export interface MsgEmergencyUnbondAmino {
  account: string;
  uToken?: CoinAmino;
}
export interface MsgEmergencyUnbondAminoMsg {
  type: "/umee.incentive.v1.MsgEmergencyUnbond";
  value: MsgEmergencyUnbondAmino;
}
/** MsgEmergencyUnbond represents a account's request to instantly unbond uToken collateral for a fee. */
export interface MsgEmergencyUnbondSDKType {
  account: string;
  uToken: CoinSDKType;
}
/** MsgEmergencyUnbondResponse defines the Msg/EmergencyUnbond response type. */
export interface MsgEmergencyUnbondResponse {}
export interface MsgEmergencyUnbondResponseProtoMsg {
  typeUrl: "/umee.incentive.v1.MsgEmergencyUnbondResponse";
  value: Uint8Array;
}
/** MsgEmergencyUnbondResponse defines the Msg/EmergencyUnbond response type. */
export interface MsgEmergencyUnbondResponseAmino {}
export interface MsgEmergencyUnbondResponseAminoMsg {
  type: "/umee.incentive.v1.MsgEmergencyUnbondResponse";
  value: MsgEmergencyUnbondResponseAmino;
}
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
export interface MsgSponsorProtoMsg {
  typeUrl: "/umee.incentive.v1.MsgSponsor";
  value: Uint8Array;
}
/**
 * MsgSponsor represents a sponsor's request to fund rewards for an incentive program.
 * The program must have been passed by governance, not yet started, and not yet funded.
 * Funded assets must be the full amount required by the program.
 */
export interface MsgSponsorAmino {
  /** Sponsor bech32 account address */
  sponsor: string;
  program: number;
}
export interface MsgSponsorAminoMsg {
  type: "/umee.incentive.v1.MsgSponsor";
  value: MsgSponsorAmino;
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
export interface MsgSponsorResponseProtoMsg {
  typeUrl: "/umee.incentive.v1.MsgSponsorResponse";
  value: Uint8Array;
}
/** MsgSponsorResponse defines the Msg/Sponsor response type. */
export interface MsgSponsorResponseAmino {}
export interface MsgSponsorResponseAminoMsg {
  type: "/umee.incentive.v1.MsgSponsorResponse";
  value: MsgSponsorResponseAmino;
}
/** MsgSponsorResponse defines the Msg/Sponsor response type. */
export interface MsgSponsorResponseSDKType {}
/** MsgGovSetParams is used by governance to update module parameters. */
export interface MsgGovSetParams {
  /** authority must be the address of the governance account. */
  authority: string;
  params: Params;
}
export interface MsgGovSetParamsProtoMsg {
  typeUrl: "/umee.incentive.v1.MsgGovSetParams";
  value: Uint8Array;
}
/** MsgGovSetParams is used by governance to update module parameters. */
export interface MsgGovSetParamsAmino {
  /** authority must be the address of the governance account. */
  authority: string;
  params?: ParamsAmino;
}
export interface MsgGovSetParamsAminoMsg {
  type: "/umee.incentive.v1.MsgGovSetParams";
  value: MsgGovSetParamsAmino;
}
/** MsgGovSetParams is used by governance to update module parameters. */
export interface MsgGovSetParamsSDKType {
  authority: string;
  params: ParamsSDKType;
}
/** MsgGovSetParamsResponse defines the Msg/SetParams response type. */
export interface MsgGovSetParamsResponse {}
export interface MsgGovSetParamsResponseProtoMsg {
  typeUrl: "/umee.incentive.v1.MsgGovSetParamsResponse";
  value: Uint8Array;
}
/** MsgGovSetParamsResponse defines the Msg/SetParams response type. */
export interface MsgGovSetParamsResponseAmino {}
export interface MsgGovSetParamsResponseAminoMsg {
  type: "/umee.incentive.v1.MsgGovSetParamsResponse";
  value: MsgGovSetParamsResponseAmino;
}
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
export interface MsgGovCreateProgramsProtoMsg {
  typeUrl: "/umee.incentive.v1.MsgGovCreatePrograms";
  value: Uint8Array;
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
export interface MsgGovCreateProgramsAmino {
  /** authority must be the address of the governance account. */
  authority: string;
  programs: IncentiveProgramAmino[];
  /** from_community_fund defines the source of funds for proposed incentive programs. */
  from_community_fund: boolean;
}
export interface MsgGovCreateProgramsAminoMsg {
  type: "/umee.incentive.v1.MsgGovCreatePrograms";
  value: MsgGovCreateProgramsAmino;
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
export interface MsgGovCreateProgramsResponseProtoMsg {
  typeUrl: "/umee.incentive.v1.MsgGovCreateProgramsResponse";
  value: Uint8Array;
}
/** MsgGovCreateProgramsResponse defines the Msg/CreatePrograms response type. */
export interface MsgGovCreateProgramsResponseAmino {}
export interface MsgGovCreateProgramsResponseAminoMsg {
  type: "/umee.incentive.v1.MsgGovCreateProgramsResponse";
  value: MsgGovCreateProgramsResponseAmino;
}
/** MsgGovCreateProgramsResponse defines the Msg/CreatePrograms response type. */
export interface MsgGovCreateProgramsResponseSDKType {}
function createBaseMsgClaim(): MsgClaim {
  return {
    account: ""
  };
}
export const MsgClaim = {
  typeUrl: "/umee.incentive.v1.MsgClaim",
  encode(message: MsgClaim, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: MsgClaimAmino): MsgClaim {
    return {
      account: object.account
    };
  },
  toAmino(message: MsgClaim): MsgClaimAmino {
    const obj: any = {};
    obj.account = message.account;
    return obj;
  },
  fromAminoMsg(object: MsgClaimAminoMsg): MsgClaim {
    return MsgClaim.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClaimProtoMsg): MsgClaim {
    return MsgClaim.decode(message.value);
  },
  toProto(message: MsgClaim): Uint8Array {
    return MsgClaim.encode(message).finish();
  },
  toProtoMsg(message: MsgClaim): MsgClaimProtoMsg {
    return {
      typeUrl: "/umee.incentive.v1.MsgClaim",
      value: MsgClaim.encode(message).finish()
    };
  }
};
function createBaseMsgClaimResponse(): MsgClaimResponse {
  return {
    amount: []
  };
}
export const MsgClaimResponse = {
  typeUrl: "/umee.incentive.v1.MsgClaimResponse",
  encode(message: MsgClaimResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: MsgClaimResponseAmino): MsgClaimResponse {
    return {
      amount: Array.isArray(object?.amount) ? object.amount.map((e: any) => Coin.fromAmino(e)) : []
    };
  },
  toAmino(message: MsgClaimResponse): MsgClaimResponseAmino {
    const obj: any = {};
    if (message.amount) {
      obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
    } else {
      obj.amount = [];
    }
    return obj;
  },
  fromAminoMsg(object: MsgClaimResponseAminoMsg): MsgClaimResponse {
    return MsgClaimResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgClaimResponseProtoMsg): MsgClaimResponse {
    return MsgClaimResponse.decode(message.value);
  },
  toProto(message: MsgClaimResponse): Uint8Array {
    return MsgClaimResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgClaimResponse): MsgClaimResponseProtoMsg {
    return {
      typeUrl: "/umee.incentive.v1.MsgClaimResponse",
      value: MsgClaimResponse.encode(message).finish()
    };
  }
};
function createBaseMsgBond(): MsgBond {
  return {
    account: "",
    uToken: Coin.fromPartial({})
  };
}
export const MsgBond = {
  typeUrl: "/umee.incentive.v1.MsgBond",
  encode(message: MsgBond, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: MsgBondAmino): MsgBond {
    return {
      account: object.account,
      uToken: object?.uToken ? Coin.fromAmino(object.uToken) : undefined
    };
  },
  toAmino(message: MsgBond): MsgBondAmino {
    const obj: any = {};
    obj.account = message.account;
    obj.uToken = message.uToken ? Coin.toAmino(message.uToken) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgBondAminoMsg): MsgBond {
    return MsgBond.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBondProtoMsg): MsgBond {
    return MsgBond.decode(message.value);
  },
  toProto(message: MsgBond): Uint8Array {
    return MsgBond.encode(message).finish();
  },
  toProtoMsg(message: MsgBond): MsgBondProtoMsg {
    return {
      typeUrl: "/umee.incentive.v1.MsgBond",
      value: MsgBond.encode(message).finish()
    };
  }
};
function createBaseMsgBondResponse(): MsgBondResponse {
  return {};
}
export const MsgBondResponse = {
  typeUrl: "/umee.incentive.v1.MsgBondResponse",
  encode(_: MsgBondResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgBondResponse {
    return {};
  },
  fromPartial(_: Partial<MsgBondResponse>): MsgBondResponse {
    const message = createBaseMsgBondResponse();
    return message;
  },
  fromAmino(_: MsgBondResponseAmino): MsgBondResponse {
    return {};
  },
  toAmino(_: MsgBondResponse): MsgBondResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgBondResponseAminoMsg): MsgBondResponse {
    return MsgBondResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBondResponseProtoMsg): MsgBondResponse {
    return MsgBondResponse.decode(message.value);
  },
  toProto(message: MsgBondResponse): Uint8Array {
    return MsgBondResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgBondResponse): MsgBondResponseProtoMsg {
    return {
      typeUrl: "/umee.incentive.v1.MsgBondResponse",
      value: MsgBondResponse.encode(message).finish()
    };
  }
};
function createBaseMsgBeginUnbonding(): MsgBeginUnbonding {
  return {
    account: "",
    uToken: Coin.fromPartial({})
  };
}
export const MsgBeginUnbonding = {
  typeUrl: "/umee.incentive.v1.MsgBeginUnbonding",
  encode(message: MsgBeginUnbonding, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: MsgBeginUnbondingAmino): MsgBeginUnbonding {
    return {
      account: object.account,
      uToken: object?.uToken ? Coin.fromAmino(object.uToken) : undefined
    };
  },
  toAmino(message: MsgBeginUnbonding): MsgBeginUnbondingAmino {
    const obj: any = {};
    obj.account = message.account;
    obj.uToken = message.uToken ? Coin.toAmino(message.uToken) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgBeginUnbondingAminoMsg): MsgBeginUnbonding {
    return MsgBeginUnbonding.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBeginUnbondingProtoMsg): MsgBeginUnbonding {
    return MsgBeginUnbonding.decode(message.value);
  },
  toProto(message: MsgBeginUnbonding): Uint8Array {
    return MsgBeginUnbonding.encode(message).finish();
  },
  toProtoMsg(message: MsgBeginUnbonding): MsgBeginUnbondingProtoMsg {
    return {
      typeUrl: "/umee.incentive.v1.MsgBeginUnbonding",
      value: MsgBeginUnbonding.encode(message).finish()
    };
  }
};
function createBaseMsgBeginUnbondingResponse(): MsgBeginUnbondingResponse {
  return {};
}
export const MsgBeginUnbondingResponse = {
  typeUrl: "/umee.incentive.v1.MsgBeginUnbondingResponse",
  encode(_: MsgBeginUnbondingResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgBeginUnbondingResponse {
    return {};
  },
  fromPartial(_: Partial<MsgBeginUnbondingResponse>): MsgBeginUnbondingResponse {
    const message = createBaseMsgBeginUnbondingResponse();
    return message;
  },
  fromAmino(_: MsgBeginUnbondingResponseAmino): MsgBeginUnbondingResponse {
    return {};
  },
  toAmino(_: MsgBeginUnbondingResponse): MsgBeginUnbondingResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgBeginUnbondingResponseAminoMsg): MsgBeginUnbondingResponse {
    return MsgBeginUnbondingResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgBeginUnbondingResponseProtoMsg): MsgBeginUnbondingResponse {
    return MsgBeginUnbondingResponse.decode(message.value);
  },
  toProto(message: MsgBeginUnbondingResponse): Uint8Array {
    return MsgBeginUnbondingResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgBeginUnbondingResponse): MsgBeginUnbondingResponseProtoMsg {
    return {
      typeUrl: "/umee.incentive.v1.MsgBeginUnbondingResponse",
      value: MsgBeginUnbondingResponse.encode(message).finish()
    };
  }
};
function createBaseMsgEmergencyUnbond(): MsgEmergencyUnbond {
  return {
    account: "",
    uToken: Coin.fromPartial({})
  };
}
export const MsgEmergencyUnbond = {
  typeUrl: "/umee.incentive.v1.MsgEmergencyUnbond",
  encode(message: MsgEmergencyUnbond, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: MsgEmergencyUnbondAmino): MsgEmergencyUnbond {
    return {
      account: object.account,
      uToken: object?.uToken ? Coin.fromAmino(object.uToken) : undefined
    };
  },
  toAmino(message: MsgEmergencyUnbond): MsgEmergencyUnbondAmino {
    const obj: any = {};
    obj.account = message.account;
    obj.uToken = message.uToken ? Coin.toAmino(message.uToken) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgEmergencyUnbondAminoMsg): MsgEmergencyUnbond {
    return MsgEmergencyUnbond.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgEmergencyUnbondProtoMsg): MsgEmergencyUnbond {
    return MsgEmergencyUnbond.decode(message.value);
  },
  toProto(message: MsgEmergencyUnbond): Uint8Array {
    return MsgEmergencyUnbond.encode(message).finish();
  },
  toProtoMsg(message: MsgEmergencyUnbond): MsgEmergencyUnbondProtoMsg {
    return {
      typeUrl: "/umee.incentive.v1.MsgEmergencyUnbond",
      value: MsgEmergencyUnbond.encode(message).finish()
    };
  }
};
function createBaseMsgEmergencyUnbondResponse(): MsgEmergencyUnbondResponse {
  return {};
}
export const MsgEmergencyUnbondResponse = {
  typeUrl: "/umee.incentive.v1.MsgEmergencyUnbondResponse",
  encode(_: MsgEmergencyUnbondResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgEmergencyUnbondResponse {
    return {};
  },
  fromPartial(_: Partial<MsgEmergencyUnbondResponse>): MsgEmergencyUnbondResponse {
    const message = createBaseMsgEmergencyUnbondResponse();
    return message;
  },
  fromAmino(_: MsgEmergencyUnbondResponseAmino): MsgEmergencyUnbondResponse {
    return {};
  },
  toAmino(_: MsgEmergencyUnbondResponse): MsgEmergencyUnbondResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgEmergencyUnbondResponseAminoMsg): MsgEmergencyUnbondResponse {
    return MsgEmergencyUnbondResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgEmergencyUnbondResponseProtoMsg): MsgEmergencyUnbondResponse {
    return MsgEmergencyUnbondResponse.decode(message.value);
  },
  toProto(message: MsgEmergencyUnbondResponse): Uint8Array {
    return MsgEmergencyUnbondResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgEmergencyUnbondResponse): MsgEmergencyUnbondResponseProtoMsg {
    return {
      typeUrl: "/umee.incentive.v1.MsgEmergencyUnbondResponse",
      value: MsgEmergencyUnbondResponse.encode(message).finish()
    };
  }
};
function createBaseMsgSponsor(): MsgSponsor {
  return {
    sponsor: "",
    program: 0
  };
}
export const MsgSponsor = {
  typeUrl: "/umee.incentive.v1.MsgSponsor",
  encode(message: MsgSponsor, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: MsgSponsorAmino): MsgSponsor {
    return {
      sponsor: object.sponsor,
      program: object.program
    };
  },
  toAmino(message: MsgSponsor): MsgSponsorAmino {
    const obj: any = {};
    obj.sponsor = message.sponsor;
    obj.program = message.program;
    return obj;
  },
  fromAminoMsg(object: MsgSponsorAminoMsg): MsgSponsor {
    return MsgSponsor.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSponsorProtoMsg): MsgSponsor {
    return MsgSponsor.decode(message.value);
  },
  toProto(message: MsgSponsor): Uint8Array {
    return MsgSponsor.encode(message).finish();
  },
  toProtoMsg(message: MsgSponsor): MsgSponsorProtoMsg {
    return {
      typeUrl: "/umee.incentive.v1.MsgSponsor",
      value: MsgSponsor.encode(message).finish()
    };
  }
};
function createBaseMsgSponsorResponse(): MsgSponsorResponse {
  return {};
}
export const MsgSponsorResponse = {
  typeUrl: "/umee.incentive.v1.MsgSponsorResponse",
  encode(_: MsgSponsorResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgSponsorResponse {
    return {};
  },
  fromPartial(_: Partial<MsgSponsorResponse>): MsgSponsorResponse {
    const message = createBaseMsgSponsorResponse();
    return message;
  },
  fromAmino(_: MsgSponsorResponseAmino): MsgSponsorResponse {
    return {};
  },
  toAmino(_: MsgSponsorResponse): MsgSponsorResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgSponsorResponseAminoMsg): MsgSponsorResponse {
    return MsgSponsorResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgSponsorResponseProtoMsg): MsgSponsorResponse {
    return MsgSponsorResponse.decode(message.value);
  },
  toProto(message: MsgSponsorResponse): Uint8Array {
    return MsgSponsorResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgSponsorResponse): MsgSponsorResponseProtoMsg {
    return {
      typeUrl: "/umee.incentive.v1.MsgSponsorResponse",
      value: MsgSponsorResponse.encode(message).finish()
    };
  }
};
function createBaseMsgGovSetParams(): MsgGovSetParams {
  return {
    authority: "",
    params: Params.fromPartial({})
  };
}
export const MsgGovSetParams = {
  typeUrl: "/umee.incentive.v1.MsgGovSetParams",
  encode(message: MsgGovSetParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: MsgGovSetParamsAmino): MsgGovSetParams {
    return {
      authority: object.authority,
      params: object?.params ? Params.fromAmino(object.params) : undefined
    };
  },
  toAmino(message: MsgGovSetParams): MsgGovSetParamsAmino {
    const obj: any = {};
    obj.authority = message.authority;
    obj.params = message.params ? Params.toAmino(message.params) : undefined;
    return obj;
  },
  fromAminoMsg(object: MsgGovSetParamsAminoMsg): MsgGovSetParams {
    return MsgGovSetParams.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgGovSetParamsProtoMsg): MsgGovSetParams {
    return MsgGovSetParams.decode(message.value);
  },
  toProto(message: MsgGovSetParams): Uint8Array {
    return MsgGovSetParams.encode(message).finish();
  },
  toProtoMsg(message: MsgGovSetParams): MsgGovSetParamsProtoMsg {
    return {
      typeUrl: "/umee.incentive.v1.MsgGovSetParams",
      value: MsgGovSetParams.encode(message).finish()
    };
  }
};
function createBaseMsgGovSetParamsResponse(): MsgGovSetParamsResponse {
  return {};
}
export const MsgGovSetParamsResponse = {
  typeUrl: "/umee.incentive.v1.MsgGovSetParamsResponse",
  encode(_: MsgGovSetParamsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgGovSetParamsResponse {
    return {};
  },
  fromPartial(_: Partial<MsgGovSetParamsResponse>): MsgGovSetParamsResponse {
    const message = createBaseMsgGovSetParamsResponse();
    return message;
  },
  fromAmino(_: MsgGovSetParamsResponseAmino): MsgGovSetParamsResponse {
    return {};
  },
  toAmino(_: MsgGovSetParamsResponse): MsgGovSetParamsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgGovSetParamsResponseAminoMsg): MsgGovSetParamsResponse {
    return MsgGovSetParamsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgGovSetParamsResponseProtoMsg): MsgGovSetParamsResponse {
    return MsgGovSetParamsResponse.decode(message.value);
  },
  toProto(message: MsgGovSetParamsResponse): Uint8Array {
    return MsgGovSetParamsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgGovSetParamsResponse): MsgGovSetParamsResponseProtoMsg {
    return {
      typeUrl: "/umee.incentive.v1.MsgGovSetParamsResponse",
      value: MsgGovSetParamsResponse.encode(message).finish()
    };
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
  typeUrl: "/umee.incentive.v1.MsgGovCreatePrograms",
  encode(message: MsgGovCreatePrograms, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
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
  },
  fromAmino(object: MsgGovCreateProgramsAmino): MsgGovCreatePrograms {
    return {
      authority: object.authority,
      programs: Array.isArray(object?.programs) ? object.programs.map((e: any) => IncentiveProgram.fromAmino(e)) : [],
      fromCommunityFund: object.from_community_fund
    };
  },
  toAmino(message: MsgGovCreatePrograms): MsgGovCreateProgramsAmino {
    const obj: any = {};
    obj.authority = message.authority;
    if (message.programs) {
      obj.programs = message.programs.map(e => e ? IncentiveProgram.toAmino(e) : undefined);
    } else {
      obj.programs = [];
    }
    obj.from_community_fund = message.fromCommunityFund;
    return obj;
  },
  fromAminoMsg(object: MsgGovCreateProgramsAminoMsg): MsgGovCreatePrograms {
    return MsgGovCreatePrograms.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgGovCreateProgramsProtoMsg): MsgGovCreatePrograms {
    return MsgGovCreatePrograms.decode(message.value);
  },
  toProto(message: MsgGovCreatePrograms): Uint8Array {
    return MsgGovCreatePrograms.encode(message).finish();
  },
  toProtoMsg(message: MsgGovCreatePrograms): MsgGovCreateProgramsProtoMsg {
    return {
      typeUrl: "/umee.incentive.v1.MsgGovCreatePrograms",
      value: MsgGovCreatePrograms.encode(message).finish()
    };
  }
};
function createBaseMsgGovCreateProgramsResponse(): MsgGovCreateProgramsResponse {
  return {};
}
export const MsgGovCreateProgramsResponse = {
  typeUrl: "/umee.incentive.v1.MsgGovCreateProgramsResponse",
  encode(_: MsgGovCreateProgramsResponse, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    return writer;
  },
  fromJSON(_: any): MsgGovCreateProgramsResponse {
    return {};
  },
  fromPartial(_: Partial<MsgGovCreateProgramsResponse>): MsgGovCreateProgramsResponse {
    const message = createBaseMsgGovCreateProgramsResponse();
    return message;
  },
  fromAmino(_: MsgGovCreateProgramsResponseAmino): MsgGovCreateProgramsResponse {
    return {};
  },
  toAmino(_: MsgGovCreateProgramsResponse): MsgGovCreateProgramsResponseAmino {
    const obj: any = {};
    return obj;
  },
  fromAminoMsg(object: MsgGovCreateProgramsResponseAminoMsg): MsgGovCreateProgramsResponse {
    return MsgGovCreateProgramsResponse.fromAmino(object.value);
  },
  fromProtoMsg(message: MsgGovCreateProgramsResponseProtoMsg): MsgGovCreateProgramsResponse {
    return MsgGovCreateProgramsResponse.decode(message.value);
  },
  toProto(message: MsgGovCreateProgramsResponse): Uint8Array {
    return MsgGovCreateProgramsResponse.encode(message).finish();
  },
  toProtoMsg(message: MsgGovCreateProgramsResponse): MsgGovCreateProgramsResponseProtoMsg {
    return {
      typeUrl: "/umee.incentive.v1.MsgGovCreateProgramsResponse",
      value: MsgGovCreateProgramsResponse.encode(message).finish()
    };
  }
};