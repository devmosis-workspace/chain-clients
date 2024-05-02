import { TallyParams, TallyParamsAmino, TallyParamsSDKType } from "../../../cosmos/gov/v1beta1/gov";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
export interface CustomParams {
  certifierUpdateSecurityVoteTally?: TallyParams;
  certifierUpdateStakeVoteTally?: TallyParams;
}
export interface CustomParamsProtoMsg {
  typeUrl: "/shentu.gov.v1alpha1.CustomParams";
  value: Uint8Array;
}
export interface CustomParamsAmino {
  certifier_update_security_vote_tally?: TallyParamsAmino;
  certifier_update_stake_vote_tally?: TallyParamsAmino;
}
export interface CustomParamsAminoMsg {
  type: "/shentu.gov.v1alpha1.CustomParams";
  value: CustomParamsAmino;
}
export interface CustomParamsSDKType {
  certifier_update_security_vote_tally?: TallyParamsSDKType;
  certifier_update_stake_vote_tally?: TallyParamsSDKType;
}
function createBaseCustomParams(): CustomParams {
  return {
    certifierUpdateSecurityVoteTally: undefined,
    certifierUpdateStakeVoteTally: undefined
  };
}
export const CustomParams = {
  typeUrl: "/shentu.gov.v1alpha1.CustomParams",
  encode(message: CustomParams, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.certifierUpdateSecurityVoteTally !== undefined) {
      TallyParams.encode(message.certifierUpdateSecurityVoteTally, writer.uint32(10).fork()).ldelim();
    }
    if (message.certifierUpdateStakeVoteTally !== undefined) {
      TallyParams.encode(message.certifierUpdateStakeVoteTally, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): CustomParams {
    return {
      certifierUpdateSecurityVoteTally: isSet(object.certifierUpdateSecurityVoteTally) ? TallyParams.fromJSON(object.certifierUpdateSecurityVoteTally) : undefined,
      certifierUpdateStakeVoteTally: isSet(object.certifierUpdateStakeVoteTally) ? TallyParams.fromJSON(object.certifierUpdateStakeVoteTally) : undefined
    };
  },
  fromPartial(object: Partial<CustomParams>): CustomParams {
    const message = createBaseCustomParams();
    message.certifierUpdateSecurityVoteTally = object.certifierUpdateSecurityVoteTally !== undefined && object.certifierUpdateSecurityVoteTally !== null ? TallyParams.fromPartial(object.certifierUpdateSecurityVoteTally) : undefined;
    message.certifierUpdateStakeVoteTally = object.certifierUpdateStakeVoteTally !== undefined && object.certifierUpdateStakeVoteTally !== null ? TallyParams.fromPartial(object.certifierUpdateStakeVoteTally) : undefined;
    return message;
  },
  fromAmino(object: CustomParamsAmino): CustomParams {
    const message = createBaseCustomParams();
    if (object.certifier_update_security_vote_tally !== undefined && object.certifier_update_security_vote_tally !== null) {
      message.certifierUpdateSecurityVoteTally = TallyParams.fromAmino(object.certifier_update_security_vote_tally);
    }
    if (object.certifier_update_stake_vote_tally !== undefined && object.certifier_update_stake_vote_tally !== null) {
      message.certifierUpdateStakeVoteTally = TallyParams.fromAmino(object.certifier_update_stake_vote_tally);
    }
    return message;
  },
  toAmino(message: CustomParams): CustomParamsAmino {
    const obj: any = {};
    obj.certifier_update_security_vote_tally = message.certifierUpdateSecurityVoteTally ? TallyParams.toAmino(message.certifierUpdateSecurityVoteTally) : undefined;
    obj.certifier_update_stake_vote_tally = message.certifierUpdateStakeVoteTally ? TallyParams.toAmino(message.certifierUpdateStakeVoteTally) : undefined;
    return obj;
  },
  fromAminoMsg(object: CustomParamsAminoMsg): CustomParams {
    return CustomParams.fromAmino(object.value);
  },
  fromProtoMsg(message: CustomParamsProtoMsg): CustomParams {
    return CustomParams.decode(message.value);
  },
  toProto(message: CustomParams): Uint8Array {
    return CustomParams.encode(message).finish();
  },
  toProtoMsg(message: CustomParams): CustomParamsProtoMsg {
    return {
      typeUrl: "/shentu.gov.v1alpha1.CustomParams",
      value: CustomParams.encode(message).finish()
    };
  }
};