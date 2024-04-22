import { Coin } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
function createBaseParams() {
    return {
        routeTimeoutWindow: BigInt(0),
        transferLimit: BigInt(0),
        endBlockerLimit: BigInt(0),
        callContractsProposalMinDeposits: []
    };
}
export const Params = {
    typeUrl: "/axelar.axelarnet.v1beta1.Params",
    encode(message, writer = BinaryWriter.create()) {
        if (message.routeTimeoutWindow !== BigInt(0)) {
            writer.uint32(8).uint64(message.routeTimeoutWindow);
        }
        if (message.transferLimit !== BigInt(0)) {
            writer.uint32(24).uint64(message.transferLimit);
        }
        if (message.endBlockerLimit !== BigInt(0)) {
            writer.uint32(32).uint64(message.endBlockerLimit);
        }
        for (const v of message.callContractsProposalMinDeposits) {
            CallContractProposalMinDeposit.encode(v, writer.uint32(42).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            routeTimeoutWindow: isSet(object.routeTimeoutWindow) ? BigInt(object.routeTimeoutWindow.toString()) : BigInt(0),
            transferLimit: isSet(object.transferLimit) ? BigInt(object.transferLimit.toString()) : BigInt(0),
            endBlockerLimit: isSet(object.endBlockerLimit) ? BigInt(object.endBlockerLimit.toString()) : BigInt(0),
            callContractsProposalMinDeposits: Array.isArray(object?.callContractsProposalMinDeposits) ? object.callContractsProposalMinDeposits.map((e) => CallContractProposalMinDeposit.fromJSON(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseParams();
        message.routeTimeoutWindow = object.routeTimeoutWindow !== undefined && object.routeTimeoutWindow !== null ? BigInt(object.routeTimeoutWindow.toString()) : BigInt(0);
        message.transferLimit = object.transferLimit !== undefined && object.transferLimit !== null ? BigInt(object.transferLimit.toString()) : BigInt(0);
        message.endBlockerLimit = object.endBlockerLimit !== undefined && object.endBlockerLimit !== null ? BigInt(object.endBlockerLimit.toString()) : BigInt(0);
        message.callContractsProposalMinDeposits = object.callContractsProposalMinDeposits?.map(e => CallContractProposalMinDeposit.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseParams();
        if (object.route_timeout_window !== undefined && object.route_timeout_window !== null) {
            message.routeTimeoutWindow = BigInt(object.route_timeout_window);
        }
        if (object.transfer_limit !== undefined && object.transfer_limit !== null) {
            message.transferLimit = BigInt(object.transfer_limit);
        }
        if (object.end_blocker_limit !== undefined && object.end_blocker_limit !== null) {
            message.endBlockerLimit = BigInt(object.end_blocker_limit);
        }
        message.callContractsProposalMinDeposits = object.call_contracts_proposal_min_deposits?.map(e => CallContractProposalMinDeposit.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.route_timeout_window = message.routeTimeoutWindow ? message.routeTimeoutWindow.toString() : undefined;
        obj.transfer_limit = message.transferLimit ? message.transferLimit.toString() : undefined;
        obj.end_blocker_limit = message.endBlockerLimit ? message.endBlockerLimit.toString() : undefined;
        if (message.callContractsProposalMinDeposits) {
            obj.call_contracts_proposal_min_deposits = message.callContractsProposalMinDeposits.map(e => e ? CallContractProposalMinDeposit.toAmino(e) : undefined);
        }
        else {
            obj.call_contracts_proposal_min_deposits = [];
        }
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
            typeUrl: "/axelar.axelarnet.v1beta1.Params",
            value: Params.encode(message).finish()
        };
    }
};
function createBaseCallContractProposalMinDeposit() {
    return {
        chain: "",
        contractAddress: "",
        minDeposits: []
    };
}
export const CallContractProposalMinDeposit = {
    typeUrl: "/axelar.axelarnet.v1beta1.CallContractProposalMinDeposit",
    encode(message, writer = BinaryWriter.create()) {
        if (message.chain !== "") {
            writer.uint32(10).string(message.chain);
        }
        if (message.contractAddress !== "") {
            writer.uint32(18).string(message.contractAddress);
        }
        for (const v of message.minDeposits) {
            Coin.encode(v, writer.uint32(26).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            chain: isSet(object.chain) ? String(object.chain) : "",
            contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
            minDeposits: Array.isArray(object?.minDeposits) ? object.minDeposits.map((e) => Coin.fromJSON(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseCallContractProposalMinDeposit();
        message.chain = object.chain ?? "";
        message.contractAddress = object.contractAddress ?? "";
        message.minDeposits = object.minDeposits?.map(e => Coin.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseCallContractProposalMinDeposit();
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = object.chain;
        }
        if (object.contract_address !== undefined && object.contract_address !== null) {
            message.contractAddress = object.contract_address;
        }
        message.minDeposits = object.min_deposits?.map(e => Coin.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.chain = message.chain;
        obj.contract_address = message.contractAddress;
        if (message.minDeposits) {
            obj.min_deposits = message.minDeposits.map(e => e ? Coin.toAmino(e) : undefined);
        }
        else {
            obj.min_deposits = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return CallContractProposalMinDeposit.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return CallContractProposalMinDeposit.decode(message.value);
    },
    toProto(message) {
        return CallContractProposalMinDeposit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.axelarnet.v1beta1.CallContractProposalMinDeposit",
            value: CallContractProposalMinDeposit.encode(message).finish()
        };
    }
};
//# sourceMappingURL=params.js.map