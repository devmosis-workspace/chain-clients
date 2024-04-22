import { NetworkInfo } from "./types";
import { Threshold } from "../../utils/v1beta1/threshold";
import { Chain } from "../../nexus/exported/v1beta1/types";
import { BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
function createBaseParams() {
    return {
        chain: "",
        confirmationHeight: BigInt(0),
        network: "",
        tokenCode: new Uint8Array(),
        burnable: new Uint8Array(),
        revoteLockingPeriod: BigInt(0),
        networks: [],
        votingThreshold: Threshold.fromPartial({}),
        minVoterCount: BigInt(0),
        commandsGasLimit: 0,
        votingGracePeriod: BigInt(0),
        endBlockerLimit: BigInt(0),
        transferLimit: BigInt(0)
    };
}
export const Params = {
    typeUrl: "/axelar.evm.v1beta1.Params",
    encode(message, writer = BinaryWriter.create()) {
        if (message.chain !== "") {
            writer.uint32(10).string(message.chain);
        }
        if (message.confirmationHeight !== BigInt(0)) {
            writer.uint32(16).uint64(message.confirmationHeight);
        }
        if (message.network !== "") {
            writer.uint32(26).string(message.network);
        }
        if (message.tokenCode.length !== 0) {
            writer.uint32(42).bytes(message.tokenCode);
        }
        if (message.burnable.length !== 0) {
            writer.uint32(50).bytes(message.burnable);
        }
        if (message.revoteLockingPeriod !== BigInt(0)) {
            writer.uint32(56).int64(message.revoteLockingPeriod);
        }
        for (const v of message.networks) {
            NetworkInfo.encode(v, writer.uint32(66).fork()).ldelim();
        }
        if (message.votingThreshold !== undefined) {
            Threshold.encode(message.votingThreshold, writer.uint32(74).fork()).ldelim();
        }
        if (message.minVoterCount !== BigInt(0)) {
            writer.uint32(80).int64(message.minVoterCount);
        }
        if (message.commandsGasLimit !== 0) {
            writer.uint32(88).uint32(message.commandsGasLimit);
        }
        if (message.votingGracePeriod !== BigInt(0)) {
            writer.uint32(104).int64(message.votingGracePeriod);
        }
        if (message.endBlockerLimit !== BigInt(0)) {
            writer.uint32(112).int64(message.endBlockerLimit);
        }
        if (message.transferLimit !== BigInt(0)) {
            writer.uint32(120).uint64(message.transferLimit);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            chain: isSet(object.chain) ? String(object.chain) : "",
            confirmationHeight: isSet(object.confirmationHeight) ? BigInt(object.confirmationHeight.toString()) : BigInt(0),
            network: isSet(object.network) ? String(object.network) : "",
            tokenCode: isSet(object.tokenCode) ? bytesFromBase64(object.tokenCode) : new Uint8Array(),
            burnable: isSet(object.burnable) ? bytesFromBase64(object.burnable) : new Uint8Array(),
            revoteLockingPeriod: isSet(object.revoteLockingPeriod) ? BigInt(object.revoteLockingPeriod.toString()) : BigInt(0),
            networks: Array.isArray(object?.networks) ? object.networks.map((e) => NetworkInfo.fromJSON(e)) : [],
            votingThreshold: isSet(object.votingThreshold) ? Threshold.fromJSON(object.votingThreshold) : undefined,
            minVoterCount: isSet(object.minVoterCount) ? BigInt(object.minVoterCount.toString()) : BigInt(0),
            commandsGasLimit: isSet(object.commandsGasLimit) ? Number(object.commandsGasLimit) : 0,
            votingGracePeriod: isSet(object.votingGracePeriod) ? BigInt(object.votingGracePeriod.toString()) : BigInt(0),
            endBlockerLimit: isSet(object.endBlockerLimit) ? BigInt(object.endBlockerLimit.toString()) : BigInt(0),
            transferLimit: isSet(object.transferLimit) ? BigInt(object.transferLimit.toString()) : BigInt(0)
        };
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.chain = object.chain ?? "";
        message.confirmationHeight = object.confirmationHeight !== undefined && object.confirmationHeight !== null ? BigInt(object.confirmationHeight.toString()) : BigInt(0);
        message.network = object.network ?? "";
        message.tokenCode = object.tokenCode ?? new Uint8Array();
        message.burnable = object.burnable ?? new Uint8Array();
        message.revoteLockingPeriod = object.revoteLockingPeriod !== undefined && object.revoteLockingPeriod !== null ? BigInt(object.revoteLockingPeriod.toString()) : BigInt(0);
        message.networks = object.networks?.map(e => NetworkInfo.fromPartial(e)) || [];
        message.votingThreshold = object.votingThreshold !== undefined && object.votingThreshold !== null ? Threshold.fromPartial(object.votingThreshold) : undefined;
        message.minVoterCount = object.minVoterCount !== undefined && object.minVoterCount !== null ? BigInt(object.minVoterCount.toString()) : BigInt(0);
        message.commandsGasLimit = object.commandsGasLimit ?? 0;
        message.votingGracePeriod = object.votingGracePeriod !== undefined && object.votingGracePeriod !== null ? BigInt(object.votingGracePeriod.toString()) : BigInt(0);
        message.endBlockerLimit = object.endBlockerLimit !== undefined && object.endBlockerLimit !== null ? BigInt(object.endBlockerLimit.toString()) : BigInt(0);
        message.transferLimit = object.transferLimit !== undefined && object.transferLimit !== null ? BigInt(object.transferLimit.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseParams();
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = object.chain;
        }
        if (object.confirmation_height !== undefined && object.confirmation_height !== null) {
            message.confirmationHeight = BigInt(object.confirmation_height);
        }
        if (object.network !== undefined && object.network !== null) {
            message.network = object.network;
        }
        if (object.token_code !== undefined && object.token_code !== null) {
            message.tokenCode = bytesFromBase64(object.token_code);
        }
        if (object.burnable !== undefined && object.burnable !== null) {
            message.burnable = bytesFromBase64(object.burnable);
        }
        if (object.revote_locking_period !== undefined && object.revote_locking_period !== null) {
            message.revoteLockingPeriod = BigInt(object.revote_locking_period);
        }
        message.networks = object.networks?.map(e => NetworkInfo.fromAmino(e)) || [];
        if (object.voting_threshold !== undefined && object.voting_threshold !== null) {
            message.votingThreshold = Threshold.fromAmino(object.voting_threshold);
        }
        if (object.min_voter_count !== undefined && object.min_voter_count !== null) {
            message.minVoterCount = BigInt(object.min_voter_count);
        }
        if (object.commands_gas_limit !== undefined && object.commands_gas_limit !== null) {
            message.commandsGasLimit = object.commands_gas_limit;
        }
        if (object.voting_grace_period !== undefined && object.voting_grace_period !== null) {
            message.votingGracePeriod = BigInt(object.voting_grace_period);
        }
        if (object.end_blocker_limit !== undefined && object.end_blocker_limit !== null) {
            message.endBlockerLimit = BigInt(object.end_blocker_limit);
        }
        if (object.transfer_limit !== undefined && object.transfer_limit !== null) {
            message.transferLimit = BigInt(object.transfer_limit);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.chain = message.chain;
        obj.confirmation_height = message.confirmationHeight ? message.confirmationHeight.toString() : undefined;
        obj.network = message.network;
        obj.token_code = message.tokenCode ? base64FromBytes(message.tokenCode) : undefined;
        obj.burnable = message.burnable ? base64FromBytes(message.burnable) : undefined;
        obj.revote_locking_period = message.revoteLockingPeriod ? message.revoteLockingPeriod.toString() : undefined;
        if (message.networks) {
            obj.networks = message.networks.map(e => e ? NetworkInfo.toAmino(e) : undefined);
        }
        else {
            obj.networks = [];
        }
        obj.voting_threshold = message.votingThreshold ? Threshold.toAmino(message.votingThreshold) : undefined;
        obj.min_voter_count = message.minVoterCount ? message.minVoterCount.toString() : undefined;
        obj.commands_gas_limit = message.commandsGasLimit;
        obj.voting_grace_period = message.votingGracePeriod ? message.votingGracePeriod.toString() : undefined;
        obj.end_blocker_limit = message.endBlockerLimit ? message.endBlockerLimit.toString() : undefined;
        obj.transfer_limit = message.transferLimit ? message.transferLimit.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Params.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Params.decode(message.value);
    },
    toProto(message) {
        return Params.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.Params",
            value: Params.encode(message).finish()
        };
    }
};
function createBasePendingChain() {
    return {
        params: Params.fromPartial({}),
        chain: Chain.fromPartial({})
    };
}
export const PendingChain = {
    typeUrl: "/axelar.evm.v1beta1.PendingChain",
    encode(message, writer = BinaryWriter.create()) {
        if (message.params !== undefined) {
            Params.encode(message.params, writer.uint32(10).fork()).ldelim();
        }
        if (message.chain !== undefined) {
            Chain.encode(message.chain, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            params: isSet(object.params) ? Params.fromJSON(object.params) : undefined,
            chain: isSet(object.chain) ? Chain.fromJSON(object.chain) : undefined
        };
    },
    fromPartial(object) {
        const message = createBasePendingChain();
        message.params = object.params !== undefined && object.params !== null ? Params.fromPartial(object.params) : undefined;
        message.chain = object.chain !== undefined && object.chain !== null ? Chain.fromPartial(object.chain) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBasePendingChain();
        if (object.params !== undefined && object.params !== null) {
            message.params = Params.fromAmino(object.params);
        }
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = Chain.fromAmino(object.chain);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.params = message.params ? Params.toAmino(message.params) : undefined;
        obj.chain = message.chain ? Chain.toAmino(message.chain) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return PendingChain.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return PendingChain.decode(message.value);
    },
    toProto(message) {
        return PendingChain.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.PendingChain",
            value: PendingChain.encode(message).finish()
        };
    }
};
//# sourceMappingURL=params.js.map