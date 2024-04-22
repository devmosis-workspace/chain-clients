import { Params } from "./params";
import { Chain, CrossChainTransfer, TransferFee, FeeInfo, GeneralMessage } from "../exported/v1beta1/types";
import { ChainState, LinkedAddresses, RateLimit, TransferEpoch } from "./types";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
function createBaseGenesisState() {
    return {
        params: Params.fromPartial({}),
        nonce: BigInt(0),
        chains: [],
        chainStates: [],
        linkedAddresses: [],
        transfers: [],
        fee: TransferFee.fromPartial({}),
        feeInfos: [],
        rateLimits: [],
        transferEpochs: [],
        messages: [],
        messageNonce: BigInt(0)
    };
}
export const GenesisState = {
    typeUrl: "/axelar.nexus.v1beta1.GenesisState",
    encode(message, writer = BinaryWriter.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        if (message.nonce !== BigInt(0)) {
            writer.uint32(16).uint64(message.nonce);
        }
        for (const v of message.chains) {
            Chain.encode(v, writer.uint32(26).fork()).ldelim();
        }
        for (const v of message.chainStates) {
            ChainState.encode(v, writer.uint32(34).fork()).ldelim();
        }
        for (const v of message.linkedAddresses) {
            LinkedAddresses.encode(v, writer.uint32(42).fork()).ldelim();
        }
        for (const v of message.transfers) {
            CrossChainTransfer.encode(v, writer.uint32(50).fork()).ldelim();
        }
        if (message.fee !== undefined) {
            TransferFee.encode(message.fee, writer.uint32(58).fork()).ldelim();
        }
        for (const v of message.feeInfos) {
            FeeInfo.encode(v, writer.uint32(66).fork()).ldelim();
        }
        for (const v of message.rateLimits) {
            RateLimit.encode(v, writer.uint32(74).fork()).ldelim();
        }
        for (const v of message.transferEpochs) {
            TransferEpoch.encode(v, writer.uint32(82).fork()).ldelim();
        }
        for (const v of message.messages) {
            GeneralMessage.encode(v, writer.uint32(90).fork()).ldelim();
        }
        if (message.messageNonce !== BigInt(0)) {
            writer.uint32(96).uint64(message.messageNonce);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
            nonce: isSet(object.nonce) ? BigInt(object.nonce.toString()) : BigInt(0),
            chains: Array.isArray(object?.chains) ? object.chains.map((e) => Chain.fromJSON(e)) : [],
            chainStates: Array.isArray(object?.chainStates) ? object.chainStates.map((e) => ChainState.fromJSON(e)) : [],
            linkedAddresses: Array.isArray(object?.linkedAddresses) ? object.linkedAddresses.map((e) => LinkedAddresses.fromJSON(e)) : [],
            transfers: Array.isArray(object?.transfers) ? object.transfers.map((e) => CrossChainTransfer.fromJSON(e)) : [],
            fee: isSet(object.fee) ? TransferFee.fromJSON(object.fee) : undefined,
            feeInfos: Array.isArray(object?.feeInfos) ? object.feeInfos.map((e) => FeeInfo.fromJSON(e)) : [],
            rateLimits: Array.isArray(object?.rateLimits) ? object.rateLimits.map((e) => RateLimit.fromJSON(e)) : [],
            transferEpochs: Array.isArray(object?.transferEpochs) ? object.transferEpochs.map((e) => TransferEpoch.fromJSON(e)) : [],
            messages: Array.isArray(object?.messages) ? object.messages.map((e) => GeneralMessage.fromJSON(e)) : [],
            messageNonce: isSet(object.messageNonce) ? BigInt(object.messageNonce.toString()) : BigInt(0)
        };
    },
    fromPartial(object) {
        const message = createBaseGenesisState();
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        message.nonce = object.nonce !== undefined && object.nonce !== null ? BigInt(object.nonce.toString()) : BigInt(0);
        message.chains = object.chains?.map(e => Chain.fromPartial(e)) || [];
        message.chainStates = object.chainStates?.map(e => ChainState.fromPartial(e)) || [];
        message.linkedAddresses = object.linkedAddresses?.map(e => LinkedAddresses.fromPartial(e)) || [];
        message.transfers = object.transfers?.map(e => CrossChainTransfer.fromPartial(e)) || [];
        message.fee = object.fee !== undefined && object.fee !== null ? TransferFee.fromPartial(object.fee) : undefined;
        message.feeInfos = object.feeInfos?.map(e => FeeInfo.fromPartial(e)) || [];
        message.rateLimits = object.rateLimits?.map(e => RateLimit.fromPartial(e)) || [];
        message.transferEpochs = object.transferEpochs?.map(e => TransferEpoch.fromPartial(e)) || [];
        message.messages = object.messages?.map(e => GeneralMessage.fromPartial(e)) || [];
        message.messageNonce = object.messageNonce !== undefined && object.messageNonce !== null ? BigInt(object.messageNonce.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseGenesisState();
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromAmino(object.params);
        }
        if (object.nonce !== undefined && object.nonce !== null) {
            message.nonce = BigInt(object.nonce);
        }
        message.chains = object.chains?.map(e => Chain.fromAmino(e)) || [];
        message.chainStates = object.chain_states?.map(e => ChainState.fromAmino(e)) || [];
        message.linkedAddresses = object.linked_addresses?.map(e => LinkedAddresses.fromAmino(e)) || [];
        message.transfers = object.transfers?.map(e => CrossChainTransfer.fromAmino(e)) || [];
        if (object.fee !== undefined && object.fee !== null) {
            message.fee = TransferFee.fromAmino(object.fee);
        }
        message.feeInfos = object.fee_infos?.map(e => FeeInfo.fromAmino(e)) || [];
        message.rateLimits = object.rate_limits?.map(e => RateLimit.fromAmino(e)) || [];
        message.transferEpochs = object.transfer_epochs?.map(e => TransferEpoch.fromAmino(e)) || [];
        message.messages = object.messages?.map(e => GeneralMessage.fromAmino(e)) || [];
        if (object.message_nonce !== undefined && object.message_nonce !== null) {
            message.messageNonce = BigInt(object.message_nonce);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        obj.nonce = message.nonce ? message.nonce.toString() : undefined;
        if (message.chains) {
            obj.chains = message.chains.map(e => e ? Chain.toAmino(e) : undefined);
        }
        else {
            obj.chains = [];
        }
        if (message.chainStates) {
            obj.chain_states = message.chainStates.map(e => e ? ChainState.toAmino(e) : undefined);
        }
        else {
            obj.chain_states = [];
        }
        if (message.linkedAddresses) {
            obj.linked_addresses = message.linkedAddresses.map(e => e ? LinkedAddresses.toAmino(e) : undefined);
        }
        else {
            obj.linked_addresses = [];
        }
        if (message.transfers) {
            obj.transfers = message.transfers.map(e => e ? CrossChainTransfer.toAmino(e) : undefined);
        }
        else {
            obj.transfers = [];
        }
        obj.fee = message.fee ? TransferFee.toAmino(message.fee) : undefined;
        if (message.feeInfos) {
            obj.fee_infos = message.feeInfos.map(e => e ? FeeInfo.toAmino(e) : undefined);
        }
        else {
            obj.fee_infos = [];
        }
        if (message.rateLimits) {
            obj.rate_limits = message.rateLimits.map(e => e ? RateLimit.toAmino(e) : undefined);
        }
        else {
            obj.rate_limits = [];
        }
        if (message.transferEpochs) {
            obj.transfer_epochs = message.transferEpochs.map(e => e ? TransferEpoch.toAmino(e) : undefined);
        }
        else {
            obj.transfer_epochs = [];
        }
        if (message.messages) {
            obj.messages = message.messages.map(e => e ? GeneralMessage.toAmino(e) : undefined);
        }
        else {
            obj.messages = [];
        }
        obj.message_nonce = message.messageNonce ? message.messageNonce.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return GenesisState.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return GenesisState.decode(message.value);
    },
    toProto(message) {
        return GenesisState.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.nexus.v1beta1.GenesisState",
            value: GenesisState.encode(message).finish()
        };
    }
};
//# sourceMappingURL=genesis.js.map