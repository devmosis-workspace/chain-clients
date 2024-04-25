import { Any, AnyProtoMsg, AnyAmino, AnySDKType } from "../../../google/protobuf/any";
import { Duration, DurationAmino, DurationSDKType } from "../../../google/protobuf/duration";
import { GodPermission, GodPermissionProtoMsg, GodPermissionSDKType, SoftwareUpgradePermission, SoftwareUpgradePermissionProtoMsg, SoftwareUpgradePermissionSDKType, TextPermission, TextPermissionProtoMsg, TextPermissionSDKType, CommunityCDPRepayDebtPermission, CommunityCDPRepayDebtPermissionProtoMsg, CommunityCDPRepayDebtPermissionSDKType, CommunityCDPWithdrawCollateralPermission, CommunityCDPWithdrawCollateralPermissionProtoMsg, CommunityCDPWithdrawCollateralPermissionSDKType, CommunityPoolLendWithdrawPermission, CommunityPoolLendWithdrawPermissionProtoMsg, CommunityPoolLendWithdrawPermissionSDKType, ParamsChangePermission, ParamsChangePermissionProtoMsg, ParamsChangePermissionSDKType } from "./permissions";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { Decimal } from "@cosmjs/math";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
/** TallyOption enumerates the valid types of a tally. */
export enum TallyOption {
  /** TALLY_OPTION_UNSPECIFIED - TALLY_OPTION_UNSPECIFIED defines a null tally option. */
  TALLY_OPTION_UNSPECIFIED = 0,
  /** TALLY_OPTION_FIRST_PAST_THE_POST - Votes are tallied each block and the proposal passes as soon as the vote threshold is reached */
  TALLY_OPTION_FIRST_PAST_THE_POST = 1,
  /** TALLY_OPTION_DEADLINE - Votes are tallied exactly once, when the deadline time is reached */
  TALLY_OPTION_DEADLINE = 2,
  UNRECOGNIZED = -1,
}
export const TallyOptionSDKType = TallyOption;
export const TallyOptionAmino = TallyOption;
export function tallyOptionFromJSON(object: any): TallyOption {
  switch (object) {
    case 0:
    case "TALLY_OPTION_UNSPECIFIED":
      return TallyOption.TALLY_OPTION_UNSPECIFIED;
    case 1:
    case "TALLY_OPTION_FIRST_PAST_THE_POST":
      return TallyOption.TALLY_OPTION_FIRST_PAST_THE_POST;
    case 2:
    case "TALLY_OPTION_DEADLINE":
      return TallyOption.TALLY_OPTION_DEADLINE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TallyOption.UNRECOGNIZED;
  }
}
export function tallyOptionToJSON(object: TallyOption): string {
  switch (object) {
    case TallyOption.TALLY_OPTION_UNSPECIFIED:
      return "TALLY_OPTION_UNSPECIFIED";
    case TallyOption.TALLY_OPTION_FIRST_PAST_THE_POST:
      return "TALLY_OPTION_FIRST_PAST_THE_POST";
    case TallyOption.TALLY_OPTION_DEADLINE:
      return "TALLY_OPTION_DEADLINE";
    case TallyOption.UNRECOGNIZED:
    default:
      return "UNRECOGNIZED";
  }
}
/** BaseCommittee is a common type shared by all Committees */
export interface BaseCommittee {
  $typeUrl?: "/kava.committee.v1beta1.BaseCommittee";
  id: bigint;
  description: string;
  members: Uint8Array[];
  permissions: (GodPermission & SoftwareUpgradePermission & TextPermission & CommunityCDPRepayDebtPermission & CommunityCDPWithdrawCollateralPermission & CommunityPoolLendWithdrawPermission & ParamsChangePermission & Any)[] | Any[];
  /** Smallest percentage that must vote for a proposal to pass */
  voteThreshold: string;
  /** The length of time a proposal remains active for. Proposals will close earlier if they get enough votes. */
  proposalDuration: Duration;
  tallyOption: TallyOption;
}
export interface BaseCommitteeProtoMsg {
  typeUrl: "/kava.committee.v1beta1.BaseCommittee";
  value: Uint8Array;
}
export type BaseCommitteeEncoded = Omit<BaseCommittee, "permissions"> & {
  permissions: (GodPermissionProtoMsg | SoftwareUpgradePermissionProtoMsg | TextPermissionProtoMsg | CommunityCDPRepayDebtPermissionProtoMsg | CommunityCDPWithdrawCollateralPermissionProtoMsg | CommunityPoolLendWithdrawPermissionProtoMsg | ParamsChangePermissionProtoMsg | AnyProtoMsg)[];
};
/** BaseCommittee is a common type shared by all Committees */
export interface BaseCommitteeAmino {
  id?: string;
  description?: string;
  members?: string[];
  permissions?: AnyAmino[];
  /** Smallest percentage that must vote for a proposal to pass */
  vote_threshold?: string;
  /** The length of time a proposal remains active for. Proposals will close earlier if they get enough votes. */
  proposal_duration?: DurationAmino;
  tally_option?: TallyOption;
}
export interface BaseCommitteeAminoMsg {
  type: "/kava.committee.v1beta1.BaseCommittee";
  value: BaseCommitteeAmino;
}
/** BaseCommittee is a common type shared by all Committees */
export interface BaseCommitteeSDKType {
  $typeUrl?: "/kava.committee.v1beta1.BaseCommittee";
  id: bigint;
  description: string;
  members: Uint8Array[];
  permissions: (GodPermissionSDKType | SoftwareUpgradePermissionSDKType | TextPermissionSDKType | CommunityCDPRepayDebtPermissionSDKType | CommunityCDPWithdrawCollateralPermissionSDKType | CommunityPoolLendWithdrawPermissionSDKType | ParamsChangePermissionSDKType | AnySDKType)[];
  vote_threshold: string;
  proposal_duration: DurationSDKType;
  tally_option: TallyOption;
}
/** MemberCommittee is an alias of BaseCommittee */
export interface MemberCommittee {
  $typeUrl?: "/kava.committee.v1beta1.MemberCommittee";
  baseCommittee?: BaseCommittee;
}
export interface MemberCommitteeProtoMsg {
  typeUrl: "/kava.committee.v1beta1.MemberCommittee";
  value: Uint8Array;
}
/** MemberCommittee is an alias of BaseCommittee */
export interface MemberCommitteeAmino {
  base_committee?: BaseCommitteeAmino;
}
export interface MemberCommitteeAminoMsg {
  type: "/kava.committee.v1beta1.MemberCommittee";
  value: MemberCommitteeAmino;
}
/** MemberCommittee is an alias of BaseCommittee */
export interface MemberCommitteeSDKType {
  $typeUrl?: "/kava.committee.v1beta1.MemberCommittee";
  base_committee?: BaseCommitteeSDKType;
}
/** TokenCommittee supports voting on proposals by token holders */
export interface TokenCommittee {
  $typeUrl?: "/kava.committee.v1beta1.TokenCommittee";
  baseCommittee?: BaseCommittee;
  quorum: string;
  tallyDenom: string;
}
export interface TokenCommitteeProtoMsg {
  typeUrl: "/kava.committee.v1beta1.TokenCommittee";
  value: Uint8Array;
}
/** TokenCommittee supports voting on proposals by token holders */
export interface TokenCommitteeAmino {
  base_committee?: BaseCommitteeAmino;
  quorum?: string;
  tally_denom?: string;
}
export interface TokenCommitteeAminoMsg {
  type: "/kava.committee.v1beta1.TokenCommittee";
  value: TokenCommitteeAmino;
}
/** TokenCommittee supports voting on proposals by token holders */
export interface TokenCommitteeSDKType {
  $typeUrl?: "/kava.committee.v1beta1.TokenCommittee";
  base_committee?: BaseCommitteeSDKType;
  quorum: string;
  tally_denom: string;
}
function createBaseBaseCommittee(): BaseCommittee {
  return {
    $typeUrl: "/kava.committee.v1beta1.BaseCommittee",
    id: BigInt(0),
    description: "",
    members: [],
    permissions: [],
    voteThreshold: "",
    proposalDuration: Duration.fromPartial({}),
    tallyOption: 0
  };
}
export const BaseCommittee = {
  typeUrl: "/kava.committee.v1beta1.BaseCommittee",
  encode(message: BaseCommittee, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.id !== BigInt(0)) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.members) {
      writer.uint32(26).bytes(v!);
    }
    for (const v of message.permissions) {
      Any.encode((v! as Any), writer.uint32(34).fork()).ldelim();
    }
    if (message.voteThreshold !== "") {
      writer.uint32(42).string(Decimal.fromUserInput(message.voteThreshold, 18).atomics);
    }
    if (message.proposalDuration !== undefined) {
      Duration.encode(message.proposalDuration, writer.uint32(50).fork()).ldelim();
    }
    if (message.tallyOption !== 0) {
      writer.uint32(56).int32(message.tallyOption);
    }
    return writer;
  },
  fromJSON(object: any): BaseCommittee {
    return {
      id: isSet(object.id) ? BigInt(object.id.toString()) : BigInt(0),
      description: isSet(object.description) ? String(object.description) : "",
      members: Array.isArray(object?.members) ? object.members.map((e: any) => bytesFromBase64(e)) : [],
      permissions: Array.isArray(object?.permissions) ? object.permissions.map((e: any) => Any.fromJSON(e)) : [],
      voteThreshold: isSet(object.voteThreshold) ? String(object.voteThreshold) : "",
      proposalDuration: isSet(object.proposalDuration) ? Duration.fromJSON(object.proposalDuration) : undefined,
      tallyOption: isSet(object.tallyOption) ? tallyOptionFromJSON(object.tallyOption) : -1
    };
  },
  fromPartial(object: Partial<BaseCommittee>): BaseCommittee {
    const message = createBaseBaseCommittee();
    message.id = object.id !== undefined && object.id !== null ? BigInt(object.id.toString()) : BigInt(0);
    message.description = object.description ?? "";
    message.members = object.members?.map(e => e) || [];
    message.permissions = object.permissions?.map(e => Any.fromPartial(e)) || [];
    message.voteThreshold = object.voteThreshold ?? "";
    message.proposalDuration = object.proposalDuration !== undefined && object.proposalDuration !== null ? Duration.fromPartial(object.proposalDuration) : undefined;
    message.tallyOption = object.tallyOption ?? 0;
    return message;
  },
  fromAmino(object: BaseCommitteeAmino): BaseCommittee {
    const message = createBaseBaseCommittee();
    if (object.id !== undefined && object.id !== null) {
      message.id = BigInt(object.id);
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    }
    message.members = object.members?.map(e => bytesFromBase64(e)) || [];
    message.permissions = object.permissions?.map(e => Permission_FromAmino(e)) || [];
    if (object.vote_threshold !== undefined && object.vote_threshold !== null) {
      message.voteThreshold = object.vote_threshold;
    }
    if (object.proposal_duration !== undefined && object.proposal_duration !== null) {
      message.proposalDuration = Duration.fromAmino(object.proposal_duration);
    }
    if (object.tally_option !== undefined && object.tally_option !== null) {
      message.tallyOption = tallyOptionFromJSON(object.tally_option);
    }
    return message;
  },
  toAmino(message: BaseCommittee): BaseCommitteeAmino {
    const obj: any = {};
    obj.id = message.id ? message.id.toString() : undefined;
    obj.description = message.description;
    if (message.members) {
      obj.members = message.members.map(e => base64FromBytes(e));
    } else {
      obj.members = [];
    }
    if (message.permissions) {
      obj.permissions = message.permissions.map(e => e ? Permission_ToAmino((e as Any)) : undefined);
    } else {
      obj.permissions = [];
    }
    obj.vote_threshold = message.voteThreshold;
    obj.proposal_duration = message.proposalDuration ? Duration.toAmino(message.proposalDuration) : undefined;
    obj.tally_option = message.tallyOption;
    return obj;
  },
  fromAminoMsg(object: BaseCommitteeAminoMsg): BaseCommittee {
    return BaseCommittee.fromAmino(object.value);
  },
  fromProtoMsg(message: BaseCommitteeProtoMsg): BaseCommittee {
    return BaseCommittee.decode(message.value);
  },
  toProto(message: BaseCommittee): Uint8Array {
    return BaseCommittee.encode(message).finish();
  },
  toProtoMsg(message: BaseCommittee): BaseCommitteeProtoMsg {
    return {
      typeUrl: "/kava.committee.v1beta1.BaseCommittee",
      value: BaseCommittee.encode(message).finish()
    };
  }
};
function createBaseMemberCommittee(): MemberCommittee {
  return {
    $typeUrl: "/kava.committee.v1beta1.MemberCommittee",
    baseCommittee: undefined
  };
}
export const MemberCommittee = {
  typeUrl: "/kava.committee.v1beta1.MemberCommittee",
  encode(message: MemberCommittee, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.baseCommittee !== undefined) {
      BaseCommittee.encode(message.baseCommittee, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): MemberCommittee {
    return {
      baseCommittee: isSet(object.baseCommittee) ? BaseCommittee.fromJSON(object.baseCommittee) : undefined
    };
  },
  fromPartial(object: Partial<MemberCommittee>): MemberCommittee {
    const message = createBaseMemberCommittee();
    message.baseCommittee = object.baseCommittee !== undefined && object.baseCommittee !== null ? BaseCommittee.fromPartial(object.baseCommittee) : undefined;
    return message;
  },
  fromAmino(object: MemberCommitteeAmino): MemberCommittee {
    const message = createBaseMemberCommittee();
    if (object.base_committee !== undefined && object.base_committee !== null) {
      message.baseCommittee = BaseCommittee.fromAmino(object.base_committee);
    }
    return message;
  },
  toAmino(message: MemberCommittee): MemberCommitteeAmino {
    const obj: any = {};
    obj.base_committee = message.baseCommittee ? BaseCommittee.toAmino(message.baseCommittee) : undefined;
    return obj;
  },
  fromAminoMsg(object: MemberCommitteeAminoMsg): MemberCommittee {
    return MemberCommittee.fromAmino(object.value);
  },
  fromProtoMsg(message: MemberCommitteeProtoMsg): MemberCommittee {
    return MemberCommittee.decode(message.value);
  },
  toProto(message: MemberCommittee): Uint8Array {
    return MemberCommittee.encode(message).finish();
  },
  toProtoMsg(message: MemberCommittee): MemberCommitteeProtoMsg {
    return {
      typeUrl: "/kava.committee.v1beta1.MemberCommittee",
      value: MemberCommittee.encode(message).finish()
    };
  }
};
function createBaseTokenCommittee(): TokenCommittee {
  return {
    $typeUrl: "/kava.committee.v1beta1.TokenCommittee",
    baseCommittee: undefined,
    quorum: "",
    tallyDenom: ""
  };
}
export const TokenCommittee = {
  typeUrl: "/kava.committee.v1beta1.TokenCommittee",
  encode(message: TokenCommittee, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.baseCommittee !== undefined) {
      BaseCommittee.encode(message.baseCommittee, writer.uint32(10).fork()).ldelim();
    }
    if (message.quorum !== "") {
      writer.uint32(18).string(Decimal.fromUserInput(message.quorum, 18).atomics);
    }
    if (message.tallyDenom !== "") {
      writer.uint32(26).string(message.tallyDenom);
    }
    return writer;
  },
  fromJSON(object: any): TokenCommittee {
    return {
      baseCommittee: isSet(object.baseCommittee) ? BaseCommittee.fromJSON(object.baseCommittee) : undefined,
      quorum: isSet(object.quorum) ? String(object.quorum) : "",
      tallyDenom: isSet(object.tallyDenom) ? String(object.tallyDenom) : ""
    };
  },
  fromPartial(object: Partial<TokenCommittee>): TokenCommittee {
    const message = createBaseTokenCommittee();
    message.baseCommittee = object.baseCommittee !== undefined && object.baseCommittee !== null ? BaseCommittee.fromPartial(object.baseCommittee) : undefined;
    message.quorum = object.quorum ?? "";
    message.tallyDenom = object.tallyDenom ?? "";
    return message;
  },
  fromAmino(object: TokenCommitteeAmino): TokenCommittee {
    const message = createBaseTokenCommittee();
    if (object.base_committee !== undefined && object.base_committee !== null) {
      message.baseCommittee = BaseCommittee.fromAmino(object.base_committee);
    }
    if (object.quorum !== undefined && object.quorum !== null) {
      message.quorum = object.quorum;
    }
    if (object.tally_denom !== undefined && object.tally_denom !== null) {
      message.tallyDenom = object.tally_denom;
    }
    return message;
  },
  toAmino(message: TokenCommittee): TokenCommitteeAmino {
    const obj: any = {};
    obj.base_committee = message.baseCommittee ? BaseCommittee.toAmino(message.baseCommittee) : undefined;
    obj.quorum = message.quorum;
    obj.tally_denom = message.tallyDenom;
    return obj;
  },
  fromAminoMsg(object: TokenCommitteeAminoMsg): TokenCommittee {
    return TokenCommittee.fromAmino(object.value);
  },
  fromProtoMsg(message: TokenCommitteeProtoMsg): TokenCommittee {
    return TokenCommittee.decode(message.value);
  },
  toProto(message: TokenCommittee): Uint8Array {
    return TokenCommittee.encode(message).finish();
  },
  toProtoMsg(message: TokenCommittee): TokenCommitteeProtoMsg {
    return {
      typeUrl: "/kava.committee.v1beta1.TokenCommittee",
      value: TokenCommittee.encode(message).finish()
    };
  }
};
export const Permission_InterfaceDecoder = (input: BinaryReader | Uint8Array): GodPermission | SoftwareUpgradePermission | TextPermission | CommunityCDPRepayDebtPermission | CommunityCDPWithdrawCollateralPermission | CommunityPoolLendWithdrawPermission | ParamsChangePermission | Any => {
  const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
  const data = Any.decode(reader, reader.uint32());
  switch (data.typeUrl) {
    case "/kava.committee.v1beta1.GodPermission":
      return GodPermission.decode(data.value);
    case "/kava.committee.v1beta1.SoftwareUpgradePermission":
      return SoftwareUpgradePermission.decode(data.value);
    case "/kava.committee.v1beta1.TextPermission":
      return TextPermission.decode(data.value);
    case "/kava.committee.v1beta1.CommunityCDPRepayDebtPermission":
      return CommunityCDPRepayDebtPermission.decode(data.value);
    case "/kava.committee.v1beta1.CommunityCDPWithdrawCollateralPermission":
      return CommunityCDPWithdrawCollateralPermission.decode(data.value);
    case "/kava.committee.v1beta1.CommunityPoolLendWithdrawPermission":
      return CommunityPoolLendWithdrawPermission.decode(data.value);
    case "/kava.committee.v1beta1.ParamsChangePermission":
      return ParamsChangePermission.decode(data.value);
    default:
      return data;
  }
};
export const Permission_FromAmino = (content: AnyAmino) => {
  switch (content.type) {
    case "/kava.committee.v1beta1.GodPermission":
      return Any.fromPartial({
        typeUrl: "/kava.committee.v1beta1.GodPermission",
        value: GodPermission.encode(GodPermission.fromPartial(GodPermission.fromAmino(content.value))).finish()
      });
    case "/kava.committee.v1beta1.SoftwareUpgradePermission":
      return Any.fromPartial({
        typeUrl: "/kava.committee.v1beta1.SoftwareUpgradePermission",
        value: SoftwareUpgradePermission.encode(SoftwareUpgradePermission.fromPartial(SoftwareUpgradePermission.fromAmino(content.value))).finish()
      });
    case "/kava.committee.v1beta1.TextPermission":
      return Any.fromPartial({
        typeUrl: "/kava.committee.v1beta1.TextPermission",
        value: TextPermission.encode(TextPermission.fromPartial(TextPermission.fromAmino(content.value))).finish()
      });
    case "/kava.committee.v1beta1.CommunityCDPRepayDebtPermission":
      return Any.fromPartial({
        typeUrl: "/kava.committee.v1beta1.CommunityCDPRepayDebtPermission",
        value: CommunityCDPRepayDebtPermission.encode(CommunityCDPRepayDebtPermission.fromPartial(CommunityCDPRepayDebtPermission.fromAmino(content.value))).finish()
      });
    case "/kava.committee.v1beta1.CommunityCDPWithdrawCollateralPermission":
      return Any.fromPartial({
        typeUrl: "/kava.committee.v1beta1.CommunityCDPWithdrawCollateralPermission",
        value: CommunityCDPWithdrawCollateralPermission.encode(CommunityCDPWithdrawCollateralPermission.fromPartial(CommunityCDPWithdrawCollateralPermission.fromAmino(content.value))).finish()
      });
    case "/kava.committee.v1beta1.CommunityPoolLendWithdrawPermission":
      return Any.fromPartial({
        typeUrl: "/kava.committee.v1beta1.CommunityPoolLendWithdrawPermission",
        value: CommunityPoolLendWithdrawPermission.encode(CommunityPoolLendWithdrawPermission.fromPartial(CommunityPoolLendWithdrawPermission.fromAmino(content.value))).finish()
      });
    case "/kava.committee.v1beta1.ParamsChangePermission":
      return Any.fromPartial({
        typeUrl: "/kava.committee.v1beta1.ParamsChangePermission",
        value: ParamsChangePermission.encode(ParamsChangePermission.fromPartial(ParamsChangePermission.fromAmino(content.value))).finish()
      });
    default:
      return Any.fromAmino(content);
  }
};
export const Permission_ToAmino = (content: Any) => {
  switch (content.typeUrl) {
    case "/kava.committee.v1beta1.GodPermission":
      return {
        type: "/kava.committee.v1beta1.GodPermission",
        value: GodPermission.toAmino(GodPermission.decode(content.value, undefined))
      };
    case "/kava.committee.v1beta1.SoftwareUpgradePermission":
      return {
        type: "/kava.committee.v1beta1.SoftwareUpgradePermission",
        value: SoftwareUpgradePermission.toAmino(SoftwareUpgradePermission.decode(content.value, undefined))
      };
    case "/kava.committee.v1beta1.TextPermission":
      return {
        type: "/kava.committee.v1beta1.TextPermission",
        value: TextPermission.toAmino(TextPermission.decode(content.value, undefined))
      };
    case "/kava.committee.v1beta1.CommunityCDPRepayDebtPermission":
      return {
        type: "/kava.committee.v1beta1.CommunityCDPRepayDebtPermission",
        value: CommunityCDPRepayDebtPermission.toAmino(CommunityCDPRepayDebtPermission.decode(content.value, undefined))
      };
    case "/kava.committee.v1beta1.CommunityCDPWithdrawCollateralPermission":
      return {
        type: "/kava.committee.v1beta1.CommunityCDPWithdrawCollateralPermission",
        value: CommunityCDPWithdrawCollateralPermission.toAmino(CommunityCDPWithdrawCollateralPermission.decode(content.value, undefined))
      };
    case "/kava.committee.v1beta1.CommunityPoolLendWithdrawPermission":
      return {
        type: "/kava.committee.v1beta1.CommunityPoolLendWithdrawPermission",
        value: CommunityPoolLendWithdrawPermission.toAmino(CommunityPoolLendWithdrawPermission.decode(content.value, undefined))
      };
    case "/kava.committee.v1beta1.ParamsChangePermission":
      return {
        type: "/kava.committee.v1beta1.ParamsChangePermission",
        value: ParamsChangePermission.toAmino(ParamsChangePermission.decode(content.value, undefined))
      };
    default:
      return Any.toAmino(content);
  }
};