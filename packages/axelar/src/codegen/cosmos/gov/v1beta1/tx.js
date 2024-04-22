import { Any } from "../../../google/protobuf/any";
import { Coin } from "../../base/v1beta1/coin";
import { WeightedVoteOption, TextProposal, voteOptionFromJSON } from "./gov";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
function createBaseMsgSubmitProposal() {
    return {
        content: undefined,
        initialDeposit: [],
        proposer: ""
    };
}
export const MsgSubmitProposal = {
    typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposal",
    encode(message, writer = BinaryWriter.create()) {
        if (message.content !== undefined) {
            Any.encode(message.content, writer.uint32(10).fork()).ldelim();
        }
        for (const v of message.initialDeposit) {
            Coin.encode(v, writer.uint32(18).fork()).ldelim();
        }
        if (message.proposer !== "") {
            writer.uint32(26).string(message.proposer);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            content: isSet(object.content) ? Any.fromJSON(object.content) : undefined,
            initialDeposit: Array.isArray(object?.initialDeposit) ? object.initialDeposit.map((e) => Coin.fromJSON(e)) : [],
            proposer: isSet(object.proposer) ? String(object.proposer) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseMsgSubmitProposal();
        message.content = object.content !== undefined && object.content !== null ? Any.fromPartial(object.content) : undefined;
        message.initialDeposit = object.initialDeposit?.map(e => Coin.fromPartial(e)) || [];
        message.proposer = object.proposer ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSubmitProposal();
        if (object.content !== undefined && object.content !== null) {
            message.content = Content_FromAmino(object.content);
        }
        message.initialDeposit = object.initial_deposit?.map(e => Coin.fromAmino(e)) || [];
        if (object.proposer !== undefined && object.proposer !== null) {
            message.proposer = object.proposer;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.content = message.content ? Content_ToAmino(message.content) : undefined;
        if (message.initialDeposit) {
            obj.initial_deposit = message.initialDeposit.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.initial_deposit = [];
        }
        obj.proposer = message.proposer;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgSubmitProposal.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgSubmitProposal",
            value: MsgSubmitProposal.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgSubmitProposal.decode(message.value);
    },
    toProto(message) {
        return MsgSubmitProposal.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposal",
            value: MsgSubmitProposal.encode(message).finish()
        };
    }
};
function createBaseMsgSubmitProposalResponse() {
    return {
        proposalId: BigInt(0)
    };
}
export const MsgSubmitProposalResponse = {
    typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposalResponse",
    encode(message, writer = BinaryWriter.create()) {
        if (message.proposalId !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposalId);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            proposalId: isSet(object.proposalId) ? BigInt(object.proposalId.toString()) : BigInt(0)
        };
    },
    fromPartial(object) {
        const message = createBaseMsgSubmitProposalResponse();
        message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgSubmitProposalResponse();
        if (object.proposal_id !== undefined && object.proposal_id !== null) {
            message.proposalId = BigInt(object.proposal_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgSubmitProposalResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgSubmitProposalResponse",
            value: MsgSubmitProposalResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgSubmitProposalResponse.decode(message.value);
    },
    toProto(message) {
        return MsgSubmitProposalResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1beta1.MsgSubmitProposalResponse",
            value: MsgSubmitProposalResponse.encode(message).finish()
        };
    }
};
function createBaseMsgVote() {
    return {
        proposalId: BigInt(0),
        voter: "",
        option: 0
    };
}
export const MsgVote = {
    typeUrl: "/cosmos.gov.v1beta1.MsgVote",
    encode(message, writer = BinaryWriter.create()) {
        if (message.proposalId !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposalId);
        }
        if (message.voter !== "") {
            writer.uint32(18).string(message.voter);
        }
        if (message.option !== 0) {
            writer.uint32(24).int32(message.option);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            proposalId: isSet(object.proposalId) ? BigInt(object.proposalId.toString()) : BigInt(0),
            voter: isSet(object.voter) ? String(object.voter) : "",
            option: isSet(object.option) ? voteOptionFromJSON(object.option) : -1
        };
    },
    fromPartial(object) {
        const message = createBaseMsgVote();
        message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
        message.voter = object.voter ?? "";
        message.option = object.option ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgVote();
        if (object.proposal_id !== undefined && object.proposal_id !== null) {
            message.proposalId = BigInt(object.proposal_id);
        }
        if (object.voter !== undefined && object.voter !== null) {
            message.voter = object.voter;
        }
        if (object.option !== undefined && object.option !== null) {
            message.option = voteOptionFromJSON(object.option);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
        obj.voter = message.voter;
        obj.option = message.option;
        return obj;
    },
    fromAminoMsg(object) {
        return MsgVote.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgVote",
            value: MsgVote.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgVote.decode(message.value);
    },
    toProto(message) {
        return MsgVote.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1beta1.MsgVote",
            value: MsgVote.encode(message).finish()
        };
    }
};
function createBaseMsgVoteResponse() {
    return {};
}
export const MsgVoteResponse = {
    typeUrl: "/cosmos.gov.v1beta1.MsgVoteResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    fromJSON(_) {
        return {};
    },
    fromPartial(_) {
        const message = createBaseMsgVoteResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgVoteResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgVoteResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgVoteResponse",
            value: MsgVoteResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgVoteResponse.decode(message.value);
    },
    toProto(message) {
        return MsgVoteResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1beta1.MsgVoteResponse",
            value: MsgVoteResponse.encode(message).finish()
        };
    }
};
function createBaseMsgVoteWeighted() {
    return {
        proposalId: BigInt(0),
        voter: "",
        options: []
    };
}
export const MsgVoteWeighted = {
    typeUrl: "/cosmos.gov.v1beta1.MsgVoteWeighted",
    encode(message, writer = BinaryWriter.create()) {
        if (message.proposalId !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposalId);
        }
        if (message.voter !== "") {
            writer.uint32(18).string(message.voter);
        }
        for (const v of message.options) {
            WeightedVoteOption.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            proposalId: isSet(object.proposalId) ? BigInt(object.proposalId.toString()) : BigInt(0),
            voter: isSet(object.voter) ? String(object.voter) : "",
            options: Array.isArray(object?.options) ? object.options.map((e) => WeightedVoteOption.fromJSON(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseMsgVoteWeighted();
        message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
        message.voter = object.voter ?? "";
        message.options = object.options?.map(e => WeightedVoteOption.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgVoteWeighted();
        if (object.proposal_id !== undefined && object.proposal_id !== null) {
            message.proposalId = BigInt(object.proposal_id);
        }
        if (object.voter !== undefined && object.voter !== null) {
            message.voter = object.voter;
        }
        message.options = object.options?.map(e => WeightedVoteOption.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
        obj.voter = message.voter;
        if (message.options) {
            obj.options = message.options.map(e => e ? WeightedVoteOption.toAmino(e) : undefined);
        }
        else {
            obj.options = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MsgVoteWeighted.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgVoteWeighted",
            value: MsgVoteWeighted.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgVoteWeighted.decode(message.value);
    },
    toProto(message) {
        return MsgVoteWeighted.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1beta1.MsgVoteWeighted",
            value: MsgVoteWeighted.encode(message).finish()
        };
    }
};
function createBaseMsgVoteWeightedResponse() {
    return {};
}
export const MsgVoteWeightedResponse = {
    typeUrl: "/cosmos.gov.v1beta1.MsgVoteWeightedResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    fromJSON(_) {
        return {};
    },
    fromPartial(_) {
        const message = createBaseMsgVoteWeightedResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgVoteWeightedResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgVoteWeightedResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgVoteWeightedResponse",
            value: MsgVoteWeightedResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgVoteWeightedResponse.decode(message.value);
    },
    toProto(message) {
        return MsgVoteWeightedResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1beta1.MsgVoteWeightedResponse",
            value: MsgVoteWeightedResponse.encode(message).finish()
        };
    }
};
function createBaseMsgDeposit() {
    return {
        proposalId: BigInt(0),
        depositor: "",
        amount: []
    };
}
export const MsgDeposit = {
    typeUrl: "/cosmos.gov.v1beta1.MsgDeposit",
    encode(message, writer = BinaryWriter.create()) {
        if (message.proposalId !== BigInt(0)) {
            writer.uint32(8).uint64(message.proposalId);
        }
        if (message.depositor !== "") {
            writer.uint32(18).string(message.depositor);
        }
        for (const v of message.amount) {
            Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            proposalId: isSet(object.proposalId) ? BigInt(object.proposalId.toString()) : BigInt(0),
            depositor: isSet(object.depositor) ? String(object.depositor) : "",
            amount: Array.isArray(object?.amount) ? object.amount.map((e) => Coin.fromJSON(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseMsgDeposit();
        message.proposalId = object.proposalId !== undefined && object.proposalId !== null ? BigInt(object.proposalId.toString()) : BigInt(0);
        message.depositor = object.depositor ?? "";
        message.amount = object.amount?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseMsgDeposit();
        if (object.proposal_id !== undefined && object.proposal_id !== null) {
            message.proposalId = BigInt(object.proposal_id);
        }
        if (object.depositor !== undefined && object.depositor !== null) {
            message.depositor = object.depositor;
        }
        message.amount = object.amount?.map(e => Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.proposal_id = message.proposalId ? message.proposalId.toString() : undefined;
        obj.depositor = message.depositor;
        if (message.amount) {
            obj.amount = message.amount.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.amount = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return MsgDeposit.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgDeposit",
            value: MsgDeposit.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgDeposit.decode(message.value);
    },
    toProto(message) {
        return MsgDeposit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1beta1.MsgDeposit",
            value: MsgDeposit.encode(message).finish()
        };
    }
};
function createBaseMsgDepositResponse() {
    return {};
}
export const MsgDepositResponse = {
    typeUrl: "/cosmos.gov.v1beta1.MsgDepositResponse",
    encode(_, writer = BinaryWriter.create()) {
        return writer;
    },
    fromJSON(_) {
        return {};
    },
    fromPartial(_) {
        const message = createBaseMsgDepositResponse();
        return message;
    },
    fromAmino(_) {
        const message = createBaseMsgDepositResponse();
        return message;
    },
    toAmino(_) {
        const obj = {};
        return obj;
    },
    fromAminoMsg(object) {
        return MsgDepositResponse.fromAmino(object.value);
    },
    toAminoMsg(message) {
        return {
            type: "cosmos-sdk/MsgDepositResponse",
            value: MsgDepositResponse.toAmino(message)
        };
    },
    fromProtoMsg(message) {
        return MsgDepositResponse.decode(message.value);
    },
    toProto(message) {
        return MsgDepositResponse.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/cosmos.gov.v1beta1.MsgDepositResponse",
            value: MsgDepositResponse.encode(message).finish()
        };
    }
};
export const Content_InterfaceDecoder = (input) => {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const data = Any.decode(reader, reader.uint32());
    switch (data.typeUrl) {
        case "/cosmos.gov.v1beta1.TextProposal":
            return TextProposal.decode(data.value);
        default:
            return data;
    }
};
export const Content_FromAmino = (content) => {
    switch (content.type) {
        case "cosmos-sdk/TextProposal":
            return Any.fromPartial({
                typeUrl: "/cosmos.gov.v1beta1.TextProposal",
                value: TextProposal.encode(TextProposal.fromPartial(TextProposal.fromAmino(content.value))).finish()
            });
        default:
            return Any.fromAmino(content);
    }
};
export const Content_ToAmino = (content) => {
    switch (content.typeUrl) {
        case "/cosmos.gov.v1beta1.TextProposal":
            return {
                type: "cosmos-sdk/TextProposal",
                value: TextProposal.toAmino(TextProposal.decode(content.value, undefined))
            };
        default:
            return Any.toAmino(content);
    }
};
//# sourceMappingURL=tx.js.map