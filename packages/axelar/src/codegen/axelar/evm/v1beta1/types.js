import { Any } from "../../../google/protobuf/any";
import { BinaryReader, BinaryWriter } from "../../../binary";
import { isSet, bytesFromBase64, base64FromBytes } from "../../../helpers";
export var Event_Status;
(function (Event_Status) {
    Event_Status[Event_Status["STATUS_UNSPECIFIED"] = 0] = "STATUS_UNSPECIFIED";
    Event_Status[Event_Status["STATUS_CONFIRMED"] = 1] = "STATUS_CONFIRMED";
    Event_Status[Event_Status["STATUS_COMPLETED"] = 2] = "STATUS_COMPLETED";
    Event_Status[Event_Status["STATUS_FAILED"] = 3] = "STATUS_FAILED";
    Event_Status[Event_Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Event_Status || (Event_Status = {}));
export const Event_StatusSDKType = Event_Status;
export const Event_StatusAmino = Event_Status;
export function event_StatusFromJSON(object) {
    switch (object) {
        case 0:
        case "STATUS_UNSPECIFIED":
            return Event_Status.STATUS_UNSPECIFIED;
        case 1:
        case "STATUS_CONFIRMED":
            return Event_Status.STATUS_CONFIRMED;
        case 2:
        case "STATUS_COMPLETED":
            return Event_Status.STATUS_COMPLETED;
        case 3:
        case "STATUS_FAILED":
            return Event_Status.STATUS_FAILED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Event_Status.UNRECOGNIZED;
    }
}
export function event_StatusToJSON(object) {
    switch (object) {
        case Event_Status.STATUS_UNSPECIFIED:
            return "STATUS_UNSPECIFIED";
        case Event_Status.STATUS_CONFIRMED:
            return "STATUS_CONFIRMED";
        case Event_Status.STATUS_COMPLETED:
            return "STATUS_COMPLETED";
        case Event_Status.STATUS_FAILED:
            return "STATUS_FAILED";
        case Event_Status.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
export var Status;
(function (Status) {
    /**
     * STATUS_UNSPECIFIED - these enum values are used for bitwise operations, therefore they need to
     * be powers of 2
     */
    Status[Status["STATUS_UNSPECIFIED"] = 0] = "STATUS_UNSPECIFIED";
    Status[Status["STATUS_INITIALIZED"] = 1] = "STATUS_INITIALIZED";
    Status[Status["STATUS_PENDING"] = 2] = "STATUS_PENDING";
    Status[Status["STATUS_CONFIRMED"] = 4] = "STATUS_CONFIRMED";
    Status[Status["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(Status || (Status = {}));
export const StatusSDKType = Status;
export const StatusAmino = Status;
export function statusFromJSON(object) {
    switch (object) {
        case 0:
        case "STATUS_UNSPECIFIED":
            return Status.STATUS_UNSPECIFIED;
        case 1:
        case "STATUS_INITIALIZED":
            return Status.STATUS_INITIALIZED;
        case 2:
        case "STATUS_PENDING":
            return Status.STATUS_PENDING;
        case 4:
        case "STATUS_CONFIRMED":
            return Status.STATUS_CONFIRMED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return Status.UNRECOGNIZED;
    }
}
export function statusToJSON(object) {
    switch (object) {
        case Status.STATUS_UNSPECIFIED:
            return "STATUS_UNSPECIFIED";
        case Status.STATUS_INITIALIZED:
            return "STATUS_INITIALIZED";
        case Status.STATUS_PENDING:
            return "STATUS_PENDING";
        case Status.STATUS_CONFIRMED:
            return "STATUS_CONFIRMED";
        case Status.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
export var CommandType;
(function (CommandType) {
    CommandType[CommandType["COMMAND_TYPE_UNSPECIFIED"] = 0] = "COMMAND_TYPE_UNSPECIFIED";
    CommandType[CommandType["COMMAND_TYPE_MINT_TOKEN"] = 1] = "COMMAND_TYPE_MINT_TOKEN";
    CommandType[CommandType["COMMAND_TYPE_DEPLOY_TOKEN"] = 2] = "COMMAND_TYPE_DEPLOY_TOKEN";
    CommandType[CommandType["COMMAND_TYPE_BURN_TOKEN"] = 3] = "COMMAND_TYPE_BURN_TOKEN";
    CommandType[CommandType["COMMAND_TYPE_TRANSFER_OPERATORSHIP"] = 4] = "COMMAND_TYPE_TRANSFER_OPERATORSHIP";
    CommandType[CommandType["COMMAND_TYPE_APPROVE_CONTRACT_CALL_WITH_MINT"] = 5] = "COMMAND_TYPE_APPROVE_CONTRACT_CALL_WITH_MINT";
    CommandType[CommandType["COMMAND_TYPE_APPROVE_CONTRACT_CALL"] = 6] = "COMMAND_TYPE_APPROVE_CONTRACT_CALL";
    CommandType[CommandType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(CommandType || (CommandType = {}));
export const CommandTypeSDKType = CommandType;
export const CommandTypeAmino = CommandType;
export function commandTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "COMMAND_TYPE_UNSPECIFIED":
            return CommandType.COMMAND_TYPE_UNSPECIFIED;
        case 1:
        case "COMMAND_TYPE_MINT_TOKEN":
            return CommandType.COMMAND_TYPE_MINT_TOKEN;
        case 2:
        case "COMMAND_TYPE_DEPLOY_TOKEN":
            return CommandType.COMMAND_TYPE_DEPLOY_TOKEN;
        case 3:
        case "COMMAND_TYPE_BURN_TOKEN":
            return CommandType.COMMAND_TYPE_BURN_TOKEN;
        case 4:
        case "COMMAND_TYPE_TRANSFER_OPERATORSHIP":
            return CommandType.COMMAND_TYPE_TRANSFER_OPERATORSHIP;
        case 5:
        case "COMMAND_TYPE_APPROVE_CONTRACT_CALL_WITH_MINT":
            return CommandType.COMMAND_TYPE_APPROVE_CONTRACT_CALL_WITH_MINT;
        case 6:
        case "COMMAND_TYPE_APPROVE_CONTRACT_CALL":
            return CommandType.COMMAND_TYPE_APPROVE_CONTRACT_CALL;
        case -1:
        case "UNRECOGNIZED":
        default:
            return CommandType.UNRECOGNIZED;
    }
}
export function commandTypeToJSON(object) {
    switch (object) {
        case CommandType.COMMAND_TYPE_UNSPECIFIED:
            return "COMMAND_TYPE_UNSPECIFIED";
        case CommandType.COMMAND_TYPE_MINT_TOKEN:
            return "COMMAND_TYPE_MINT_TOKEN";
        case CommandType.COMMAND_TYPE_DEPLOY_TOKEN:
            return "COMMAND_TYPE_DEPLOY_TOKEN";
        case CommandType.COMMAND_TYPE_BURN_TOKEN:
            return "COMMAND_TYPE_BURN_TOKEN";
        case CommandType.COMMAND_TYPE_TRANSFER_OPERATORSHIP:
            return "COMMAND_TYPE_TRANSFER_OPERATORSHIP";
        case CommandType.COMMAND_TYPE_APPROVE_CONTRACT_CALL_WITH_MINT:
            return "COMMAND_TYPE_APPROVE_CONTRACT_CALL_WITH_MINT";
        case CommandType.COMMAND_TYPE_APPROVE_CONTRACT_CALL:
            return "COMMAND_TYPE_APPROVE_CONTRACT_CALL";
        case CommandType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
export var BatchedCommandsStatus;
(function (BatchedCommandsStatus) {
    BatchedCommandsStatus[BatchedCommandsStatus["BATCHED_COMMANDS_STATUS_UNSPECIFIED"] = 0] = "BATCHED_COMMANDS_STATUS_UNSPECIFIED";
    BatchedCommandsStatus[BatchedCommandsStatus["BATCHED_COMMANDS_STATUS_SIGNING"] = 1] = "BATCHED_COMMANDS_STATUS_SIGNING";
    BatchedCommandsStatus[BatchedCommandsStatus["BATCHED_COMMANDS_STATUS_ABORTED"] = 2] = "BATCHED_COMMANDS_STATUS_ABORTED";
    BatchedCommandsStatus[BatchedCommandsStatus["BATCHED_COMMANDS_STATUS_SIGNED"] = 3] = "BATCHED_COMMANDS_STATUS_SIGNED";
    BatchedCommandsStatus[BatchedCommandsStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(BatchedCommandsStatus || (BatchedCommandsStatus = {}));
export const BatchedCommandsStatusSDKType = BatchedCommandsStatus;
export const BatchedCommandsStatusAmino = BatchedCommandsStatus;
export function batchedCommandsStatusFromJSON(object) {
    switch (object) {
        case 0:
        case "BATCHED_COMMANDS_STATUS_UNSPECIFIED":
            return BatchedCommandsStatus.BATCHED_COMMANDS_STATUS_UNSPECIFIED;
        case 1:
        case "BATCHED_COMMANDS_STATUS_SIGNING":
            return BatchedCommandsStatus.BATCHED_COMMANDS_STATUS_SIGNING;
        case 2:
        case "BATCHED_COMMANDS_STATUS_ABORTED":
            return BatchedCommandsStatus.BATCHED_COMMANDS_STATUS_ABORTED;
        case 3:
        case "BATCHED_COMMANDS_STATUS_SIGNED":
            return BatchedCommandsStatus.BATCHED_COMMANDS_STATUS_SIGNED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return BatchedCommandsStatus.UNRECOGNIZED;
    }
}
export function batchedCommandsStatusToJSON(object) {
    switch (object) {
        case BatchedCommandsStatus.BATCHED_COMMANDS_STATUS_UNSPECIFIED:
            return "BATCHED_COMMANDS_STATUS_UNSPECIFIED";
        case BatchedCommandsStatus.BATCHED_COMMANDS_STATUS_SIGNING:
            return "BATCHED_COMMANDS_STATUS_SIGNING";
        case BatchedCommandsStatus.BATCHED_COMMANDS_STATUS_ABORTED:
            return "BATCHED_COMMANDS_STATUS_ABORTED";
        case BatchedCommandsStatus.BATCHED_COMMANDS_STATUS_SIGNED:
            return "BATCHED_COMMANDS_STATUS_SIGNED";
        case BatchedCommandsStatus.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
export var SigType;
(function (SigType) {
    SigType[SigType["SIG_TYPE_UNSPECIFIED"] = 0] = "SIG_TYPE_UNSPECIFIED";
    SigType[SigType["SIG_TYPE_TX"] = 1] = "SIG_TYPE_TX";
    SigType[SigType["SIG_TYPE_COMMAND"] = 2] = "SIG_TYPE_COMMAND";
    SigType[SigType["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(SigType || (SigType = {}));
export const SigTypeSDKType = SigType;
export const SigTypeAmino = SigType;
export function sigTypeFromJSON(object) {
    switch (object) {
        case 0:
        case "SIG_TYPE_UNSPECIFIED":
            return SigType.SIG_TYPE_UNSPECIFIED;
        case 1:
        case "SIG_TYPE_TX":
            return SigType.SIG_TYPE_TX;
        case 2:
        case "SIG_TYPE_COMMAND":
            return SigType.SIG_TYPE_COMMAND;
        case -1:
        case "UNRECOGNIZED":
        default:
            return SigType.UNRECOGNIZED;
    }
}
export function sigTypeToJSON(object) {
    switch (object) {
        case SigType.SIG_TYPE_UNSPECIFIED:
            return "SIG_TYPE_UNSPECIFIED";
        case SigType.SIG_TYPE_TX:
            return "SIG_TYPE_TX";
        case SigType.SIG_TYPE_COMMAND:
            return "SIG_TYPE_COMMAND";
        case SigType.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
export var DepositStatus;
(function (DepositStatus) {
    DepositStatus[DepositStatus["DEPOSIT_STATUS_UNSPECIFIED"] = 0] = "DEPOSIT_STATUS_UNSPECIFIED";
    DepositStatus[DepositStatus["DEPOSIT_STATUS_PENDING"] = 1] = "DEPOSIT_STATUS_PENDING";
    DepositStatus[DepositStatus["DEPOSIT_STATUS_CONFIRMED"] = 2] = "DEPOSIT_STATUS_CONFIRMED";
    DepositStatus[DepositStatus["DEPOSIT_STATUS_BURNED"] = 3] = "DEPOSIT_STATUS_BURNED";
    DepositStatus[DepositStatus["UNRECOGNIZED"] = -1] = "UNRECOGNIZED";
})(DepositStatus || (DepositStatus = {}));
export const DepositStatusSDKType = DepositStatus;
export const DepositStatusAmino = DepositStatus;
export function depositStatusFromJSON(object) {
    switch (object) {
        case 0:
        case "DEPOSIT_STATUS_UNSPECIFIED":
            return DepositStatus.DEPOSIT_STATUS_UNSPECIFIED;
        case 1:
        case "DEPOSIT_STATUS_PENDING":
            return DepositStatus.DEPOSIT_STATUS_PENDING;
        case 2:
        case "DEPOSIT_STATUS_CONFIRMED":
            return DepositStatus.DEPOSIT_STATUS_CONFIRMED;
        case 3:
        case "DEPOSIT_STATUS_BURNED":
            return DepositStatus.DEPOSIT_STATUS_BURNED;
        case -1:
        case "UNRECOGNIZED":
        default:
            return DepositStatus.UNRECOGNIZED;
    }
}
export function depositStatusToJSON(object) {
    switch (object) {
        case DepositStatus.DEPOSIT_STATUS_UNSPECIFIED:
            return "DEPOSIT_STATUS_UNSPECIFIED";
        case DepositStatus.DEPOSIT_STATUS_PENDING:
            return "DEPOSIT_STATUS_PENDING";
        case DepositStatus.DEPOSIT_STATUS_CONFIRMED:
            return "DEPOSIT_STATUS_CONFIRMED";
        case DepositStatus.DEPOSIT_STATUS_BURNED:
            return "DEPOSIT_STATUS_BURNED";
        case DepositStatus.UNRECOGNIZED:
        default:
            return "UNRECOGNIZED";
    }
}
function createBaseVoteEvents() {
    return {
        chain: "",
        events: []
    };
}
export const VoteEvents = {
    typeUrl: "/axelar.evm.v1beta1.VoteEvents",
    encode(message, writer = BinaryWriter.create()) {
        if (message.chain !== "") {
            writer.uint32(10).string(message.chain);
        }
        for (const v of message.events) {
            Event.encode(v, writer.uint32(18).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            chain: isSet(object.chain) ? String(object.chain) : "",
            events: Array.isArray(object?.events) ? object.events.map((e) => Event.fromJSON(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseVoteEvents();
        message.chain = object.chain ?? "";
        message.events = object.events?.map(e => Event.fromPartial(e)) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseVoteEvents();
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = object.chain;
        }
        message.events = object.events?.map(e => Event.fromAmino(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.chain = message.chain;
        if (message.events) {
            obj.events = message.events.map(e => e ? Event.toAmino(e) : undefined);
        }
        else {
            obj.events = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return VoteEvents.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return VoteEvents.decode(message.value);
    },
    toProto(message) {
        return VoteEvents.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.VoteEvents",
            value: VoteEvents.encode(message).finish()
        };
    }
};
function createBaseEvent() {
    return {
        chain: "",
        txId: new Uint8Array(),
        index: BigInt(0),
        status: 0,
        tokenSent: undefined,
        contractCall: undefined,
        contractCallWithToken: undefined,
        transfer: undefined,
        tokenDeployed: undefined,
        multisigOwnershipTransferred: undefined,
        multisigOperatorshipTransferred: undefined
    };
}
export const Event = {
    typeUrl: "/axelar.evm.v1beta1.Event",
    encode(message, writer = BinaryWriter.create()) {
        if (message.chain !== "") {
            writer.uint32(10).string(message.chain);
        }
        if (message.txId.length !== 0) {
            writer.uint32(18).bytes(message.txId);
        }
        if (message.index !== BigInt(0)) {
            writer.uint32(24).uint64(message.index);
        }
        if (message.status !== 0) {
            writer.uint32(32).int32(message.status);
        }
        if (message.tokenSent !== undefined) {
            EventTokenSent.encode(message.tokenSent, writer.uint32(42).fork()).ldelim();
        }
        if (message.contractCall !== undefined) {
            EventContractCall.encode(message.contractCall, writer.uint32(50).fork()).ldelim();
        }
        if (message.contractCallWithToken !== undefined) {
            EventContractCallWithToken.encode(message.contractCallWithToken, writer.uint32(58).fork()).ldelim();
        }
        if (message.transfer !== undefined) {
            EventTransfer.encode(message.transfer, writer.uint32(66).fork()).ldelim();
        }
        if (message.tokenDeployed !== undefined) {
            EventTokenDeployed.encode(message.tokenDeployed, writer.uint32(74).fork()).ldelim();
        }
        if (message.multisigOwnershipTransferred !== undefined) {
            EventMultisigOwnershipTransferred.encode(message.multisigOwnershipTransferred, writer.uint32(82).fork()).ldelim();
        }
        if (message.multisigOperatorshipTransferred !== undefined) {
            EventMultisigOperatorshipTransferred.encode(message.multisigOperatorshipTransferred, writer.uint32(90).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            chain: isSet(object.chain) ? String(object.chain) : "",
            txId: isSet(object.txId) ? bytesFromBase64(object.txId) : new Uint8Array(),
            index: isSet(object.index) ? BigInt(object.index.toString()) : BigInt(0),
            status: isSet(object.status) ? event_StatusFromJSON(object.status) : -1,
            tokenSent: isSet(object.tokenSent) ? EventTokenSent.fromJSON(object.tokenSent) : undefined,
            contractCall: isSet(object.contractCall) ? EventContractCall.fromJSON(object.contractCall) : undefined,
            contractCallWithToken: isSet(object.contractCallWithToken) ? EventContractCallWithToken.fromJSON(object.contractCallWithToken) : undefined,
            transfer: isSet(object.transfer) ? EventTransfer.fromJSON(object.transfer) : undefined,
            tokenDeployed: isSet(object.tokenDeployed) ? EventTokenDeployed.fromJSON(object.tokenDeployed) : undefined,
            multisigOwnershipTransferred: isSet(object.multisigOwnershipTransferred) ? EventMultisigOwnershipTransferred.fromJSON(object.multisigOwnershipTransferred) : undefined,
            multisigOperatorshipTransferred: isSet(object.multisigOperatorshipTransferred) ? EventMultisigOperatorshipTransferred.fromJSON(object.multisigOperatorshipTransferred) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseEvent();
        message.chain = object.chain ?? "";
        message.txId = object.txId ?? new Uint8Array();
        message.index = object.index !== undefined && object.index !== null ? BigInt(object.index.toString()) : BigInt(0);
        message.status = object.status ?? 0;
        message.tokenSent = object.tokenSent !== undefined && object.tokenSent !== null ? EventTokenSent.fromPartial(object.tokenSent) : undefined;
        message.contractCall = object.contractCall !== undefined && object.contractCall !== null ? EventContractCall.fromPartial(object.contractCall) : undefined;
        message.contractCallWithToken = object.contractCallWithToken !== undefined && object.contractCallWithToken !== null ? EventContractCallWithToken.fromPartial(object.contractCallWithToken) : undefined;
        message.transfer = object.transfer !== undefined && object.transfer !== null ? EventTransfer.fromPartial(object.transfer) : undefined;
        message.tokenDeployed = object.tokenDeployed !== undefined && object.tokenDeployed !== null ? EventTokenDeployed.fromPartial(object.tokenDeployed) : undefined;
        message.multisigOwnershipTransferred = object.multisigOwnershipTransferred !== undefined && object.multisigOwnershipTransferred !== null ? EventMultisigOwnershipTransferred.fromPartial(object.multisigOwnershipTransferred) : undefined;
        message.multisigOperatorshipTransferred = object.multisigOperatorshipTransferred !== undefined && object.multisigOperatorshipTransferred !== null ? EventMultisigOperatorshipTransferred.fromPartial(object.multisigOperatorshipTransferred) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseEvent();
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = object.chain;
        }
        if (object.tx_id !== undefined && object.tx_id !== null) {
            message.txId = bytesFromBase64(object.tx_id);
        }
        if (object.index !== undefined && object.index !== null) {
            message.index = BigInt(object.index);
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = event_StatusFromJSON(object.status);
        }
        if (object.token_sent !== undefined && object.token_sent !== null) {
            message.tokenSent = EventTokenSent.fromAmino(object.token_sent);
        }
        if (object.contract_call !== undefined && object.contract_call !== null) {
            message.contractCall = EventContractCall.fromAmino(object.contract_call);
        }
        if (object.contract_call_with_token !== undefined && object.contract_call_with_token !== null) {
            message.contractCallWithToken = EventContractCallWithToken.fromAmino(object.contract_call_with_token);
        }
        if (object.transfer !== undefined && object.transfer !== null) {
            message.transfer = EventTransfer.fromAmino(object.transfer);
        }
        if (object.token_deployed !== undefined && object.token_deployed !== null) {
            message.tokenDeployed = EventTokenDeployed.fromAmino(object.token_deployed);
        }
        if (object.multisig_ownership_transferred !== undefined && object.multisig_ownership_transferred !== null) {
            message.multisigOwnershipTransferred = EventMultisigOwnershipTransferred.fromAmino(object.multisig_ownership_transferred);
        }
        if (object.multisig_operatorship_transferred !== undefined && object.multisig_operatorship_transferred !== null) {
            message.multisigOperatorshipTransferred = EventMultisigOperatorshipTransferred.fromAmino(object.multisig_operatorship_transferred);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.chain = message.chain;
        obj.tx_id = message.txId ? base64FromBytes(message.txId) : undefined;
        obj.index = message.index ? message.index.toString() : undefined;
        obj.status = message.status;
        obj.token_sent = message.tokenSent ? EventTokenSent.toAmino(message.tokenSent) : undefined;
        obj.contract_call = message.contractCall ? EventContractCall.toAmino(message.contractCall) : undefined;
        obj.contract_call_with_token = message.contractCallWithToken ? EventContractCallWithToken.toAmino(message.contractCallWithToken) : undefined;
        obj.transfer = message.transfer ? EventTransfer.toAmino(message.transfer) : undefined;
        obj.token_deployed = message.tokenDeployed ? EventTokenDeployed.toAmino(message.tokenDeployed) : undefined;
        obj.multisig_ownership_transferred = message.multisigOwnershipTransferred ? EventMultisigOwnershipTransferred.toAmino(message.multisigOwnershipTransferred) : undefined;
        obj.multisig_operatorship_transferred = message.multisigOperatorshipTransferred ? EventMultisigOperatorshipTransferred.toAmino(message.multisigOperatorshipTransferred) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Event.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Event.decode(message.value);
    },
    toProto(message) {
        return Event.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.Event",
            value: Event.encode(message).finish()
        };
    }
};
function createBaseEventTokenSent() {
    return {
        sender: new Uint8Array(),
        destinationChain: "",
        destinationAddress: "",
        symbol: "",
        amount: new Uint8Array()
    };
}
export const EventTokenSent = {
    typeUrl: "/axelar.evm.v1beta1.EventTokenSent",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender.length !== 0) {
            writer.uint32(10).bytes(message.sender);
        }
        if (message.destinationChain !== "") {
            writer.uint32(18).string(message.destinationChain);
        }
        if (message.destinationAddress !== "") {
            writer.uint32(26).string(message.destinationAddress);
        }
        if (message.symbol !== "") {
            writer.uint32(34).string(message.symbol);
        }
        if (message.amount.length !== 0) {
            writer.uint32(42).bytes(message.amount);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
            destinationChain: isSet(object.destinationChain) ? String(object.destinationChain) : "",
            destinationAddress: isSet(object.destinationAddress) ? String(object.destinationAddress) : "",
            symbol: isSet(object.symbol) ? String(object.symbol) : "",
            amount: isSet(object.amount) ? bytesFromBase64(object.amount) : new Uint8Array()
        };
    },
    fromPartial(object) {
        const message = createBaseEventTokenSent();
        message.sender = object.sender ?? new Uint8Array();
        message.destinationChain = object.destinationChain ?? "";
        message.destinationAddress = object.destinationAddress ?? "";
        message.symbol = object.symbol ?? "";
        message.amount = object.amount ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventTokenSent();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = bytesFromBase64(object.sender);
        }
        if (object.destination_chain !== undefined && object.destination_chain !== null) {
            message.destinationChain = object.destination_chain;
        }
        if (object.destination_address !== undefined && object.destination_address !== null) {
            message.destinationAddress = object.destination_address;
        }
        if (object.symbol !== undefined && object.symbol !== null) {
            message.symbol = object.symbol;
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = bytesFromBase64(object.amount);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender ? base64FromBytes(message.sender) : undefined;
        obj.destination_chain = message.destinationChain;
        obj.destination_address = message.destinationAddress;
        obj.symbol = message.symbol;
        obj.amount = message.amount ? base64FromBytes(message.amount) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return EventTokenSent.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventTokenSent.decode(message.value);
    },
    toProto(message) {
        return EventTokenSent.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.EventTokenSent",
            value: EventTokenSent.encode(message).finish()
        };
    }
};
function createBaseEventContractCall() {
    return {
        sender: new Uint8Array(),
        destinationChain: "",
        contractAddress: "",
        payloadHash: new Uint8Array()
    };
}
export const EventContractCall = {
    typeUrl: "/axelar.evm.v1beta1.EventContractCall",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender.length !== 0) {
            writer.uint32(10).bytes(message.sender);
        }
        if (message.destinationChain !== "") {
            writer.uint32(18).string(message.destinationChain);
        }
        if (message.contractAddress !== "") {
            writer.uint32(26).string(message.contractAddress);
        }
        if (message.payloadHash.length !== 0) {
            writer.uint32(34).bytes(message.payloadHash);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
            destinationChain: isSet(object.destinationChain) ? String(object.destinationChain) : "",
            contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
            payloadHash: isSet(object.payloadHash) ? bytesFromBase64(object.payloadHash) : new Uint8Array()
        };
    },
    fromPartial(object) {
        const message = createBaseEventContractCall();
        message.sender = object.sender ?? new Uint8Array();
        message.destinationChain = object.destinationChain ?? "";
        message.contractAddress = object.contractAddress ?? "";
        message.payloadHash = object.payloadHash ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventContractCall();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = bytesFromBase64(object.sender);
        }
        if (object.destination_chain !== undefined && object.destination_chain !== null) {
            message.destinationChain = object.destination_chain;
        }
        if (object.contract_address !== undefined && object.contract_address !== null) {
            message.contractAddress = object.contract_address;
        }
        if (object.payload_hash !== undefined && object.payload_hash !== null) {
            message.payloadHash = bytesFromBase64(object.payload_hash);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender ? base64FromBytes(message.sender) : undefined;
        obj.destination_chain = message.destinationChain;
        obj.contract_address = message.contractAddress;
        obj.payload_hash = message.payloadHash ? base64FromBytes(message.payloadHash) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return EventContractCall.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventContractCall.decode(message.value);
    },
    toProto(message) {
        return EventContractCall.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.EventContractCall",
            value: EventContractCall.encode(message).finish()
        };
    }
};
function createBaseEventContractCallWithToken() {
    return {
        sender: new Uint8Array(),
        destinationChain: "",
        contractAddress: "",
        payloadHash: new Uint8Array(),
        symbol: "",
        amount: new Uint8Array()
    };
}
export const EventContractCallWithToken = {
    typeUrl: "/axelar.evm.v1beta1.EventContractCallWithToken",
    encode(message, writer = BinaryWriter.create()) {
        if (message.sender.length !== 0) {
            writer.uint32(10).bytes(message.sender);
        }
        if (message.destinationChain !== "") {
            writer.uint32(18).string(message.destinationChain);
        }
        if (message.contractAddress !== "") {
            writer.uint32(26).string(message.contractAddress);
        }
        if (message.payloadHash.length !== 0) {
            writer.uint32(34).bytes(message.payloadHash);
        }
        if (message.symbol !== "") {
            writer.uint32(42).string(message.symbol);
        }
        if (message.amount.length !== 0) {
            writer.uint32(50).bytes(message.amount);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            sender: isSet(object.sender) ? bytesFromBase64(object.sender) : new Uint8Array(),
            destinationChain: isSet(object.destinationChain) ? String(object.destinationChain) : "",
            contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
            payloadHash: isSet(object.payloadHash) ? bytesFromBase64(object.payloadHash) : new Uint8Array(),
            symbol: isSet(object.symbol) ? String(object.symbol) : "",
            amount: isSet(object.amount) ? bytesFromBase64(object.amount) : new Uint8Array()
        };
    },
    fromPartial(object) {
        const message = createBaseEventContractCallWithToken();
        message.sender = object.sender ?? new Uint8Array();
        message.destinationChain = object.destinationChain ?? "";
        message.contractAddress = object.contractAddress ?? "";
        message.payloadHash = object.payloadHash ?? new Uint8Array();
        message.symbol = object.symbol ?? "";
        message.amount = object.amount ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventContractCallWithToken();
        if (object.sender !== undefined && object.sender !== null) {
            message.sender = bytesFromBase64(object.sender);
        }
        if (object.destination_chain !== undefined && object.destination_chain !== null) {
            message.destinationChain = object.destination_chain;
        }
        if (object.contract_address !== undefined && object.contract_address !== null) {
            message.contractAddress = object.contract_address;
        }
        if (object.payload_hash !== undefined && object.payload_hash !== null) {
            message.payloadHash = bytesFromBase64(object.payload_hash);
        }
        if (object.symbol !== undefined && object.symbol !== null) {
            message.symbol = object.symbol;
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = bytesFromBase64(object.amount);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.sender = message.sender ? base64FromBytes(message.sender) : undefined;
        obj.destination_chain = message.destinationChain;
        obj.contract_address = message.contractAddress;
        obj.payload_hash = message.payloadHash ? base64FromBytes(message.payloadHash) : undefined;
        obj.symbol = message.symbol;
        obj.amount = message.amount ? base64FromBytes(message.amount) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return EventContractCallWithToken.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventContractCallWithToken.decode(message.value);
    },
    toProto(message) {
        return EventContractCallWithToken.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.EventContractCallWithToken",
            value: EventContractCallWithToken.encode(message).finish()
        };
    }
};
function createBaseEventTransfer() {
    return {
        to: new Uint8Array(),
        amount: new Uint8Array()
    };
}
export const EventTransfer = {
    typeUrl: "/axelar.evm.v1beta1.EventTransfer",
    encode(message, writer = BinaryWriter.create()) {
        if (message.to.length !== 0) {
            writer.uint32(10).bytes(message.to);
        }
        if (message.amount.length !== 0) {
            writer.uint32(18).bytes(message.amount);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            to: isSet(object.to) ? bytesFromBase64(object.to) : new Uint8Array(),
            amount: isSet(object.amount) ? bytesFromBase64(object.amount) : new Uint8Array()
        };
    },
    fromPartial(object) {
        const message = createBaseEventTransfer();
        message.to = object.to ?? new Uint8Array();
        message.amount = object.amount ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventTransfer();
        if (object.to !== undefined && object.to !== null) {
            message.to = bytesFromBase64(object.to);
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = bytesFromBase64(object.amount);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.to = message.to ? base64FromBytes(message.to) : undefined;
        obj.amount = message.amount ? base64FromBytes(message.amount) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return EventTransfer.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventTransfer.decode(message.value);
    },
    toProto(message) {
        return EventTransfer.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.EventTransfer",
            value: EventTransfer.encode(message).finish()
        };
    }
};
function createBaseEventTokenDeployed() {
    return {
        symbol: "",
        tokenAddress: new Uint8Array()
    };
}
export const EventTokenDeployed = {
    typeUrl: "/axelar.evm.v1beta1.EventTokenDeployed",
    encode(message, writer = BinaryWriter.create()) {
        if (message.symbol !== "") {
            writer.uint32(10).string(message.symbol);
        }
        if (message.tokenAddress.length !== 0) {
            writer.uint32(18).bytes(message.tokenAddress);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            symbol: isSet(object.symbol) ? String(object.symbol) : "",
            tokenAddress: isSet(object.tokenAddress) ? bytesFromBase64(object.tokenAddress) : new Uint8Array()
        };
    },
    fromPartial(object) {
        const message = createBaseEventTokenDeployed();
        message.symbol = object.symbol ?? "";
        message.tokenAddress = object.tokenAddress ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventTokenDeployed();
        if (object.symbol !== undefined && object.symbol !== null) {
            message.symbol = object.symbol;
        }
        if (object.token_address !== undefined && object.token_address !== null) {
            message.tokenAddress = bytesFromBase64(object.token_address);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.symbol = message.symbol;
        obj.token_address = message.tokenAddress ? base64FromBytes(message.tokenAddress) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return EventTokenDeployed.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventTokenDeployed.decode(message.value);
    },
    toProto(message) {
        return EventTokenDeployed.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.EventTokenDeployed",
            value: EventTokenDeployed.encode(message).finish()
        };
    }
};
function createBaseEventMultisigOwnershipTransferred() {
    return {
        preOwners: [],
        prevThreshold: new Uint8Array(),
        newOwners: [],
        newThreshold: new Uint8Array()
    };
}
export const EventMultisigOwnershipTransferred = {
    typeUrl: "/axelar.evm.v1beta1.EventMultisigOwnershipTransferred",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.preOwners) {
            writer.uint32(10).bytes(v);
        }
        if (message.prevThreshold.length !== 0) {
            writer.uint32(18).bytes(message.prevThreshold);
        }
        for (const v of message.newOwners) {
            writer.uint32(26).bytes(v);
        }
        if (message.newThreshold.length !== 0) {
            writer.uint32(34).bytes(message.newThreshold);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            preOwners: Array.isArray(object?.preOwners) ? object.preOwners.map((e) => bytesFromBase64(e)) : [],
            prevThreshold: isSet(object.prevThreshold) ? bytesFromBase64(object.prevThreshold) : new Uint8Array(),
            newOwners: Array.isArray(object?.newOwners) ? object.newOwners.map((e) => bytesFromBase64(e)) : [],
            newThreshold: isSet(object.newThreshold) ? bytesFromBase64(object.newThreshold) : new Uint8Array()
        };
    },
    fromPartial(object) {
        const message = createBaseEventMultisigOwnershipTransferred();
        message.preOwners = object.preOwners?.map(e => e) || [];
        message.prevThreshold = object.prevThreshold ?? new Uint8Array();
        message.newOwners = object.newOwners?.map(e => e) || [];
        message.newThreshold = object.newThreshold ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventMultisigOwnershipTransferred();
        message.preOwners = object.pre_owners?.map(e => bytesFromBase64(e)) || [];
        if (object.prev_threshold !== undefined && object.prev_threshold !== null) {
            message.prevThreshold = bytesFromBase64(object.prev_threshold);
        }
        message.newOwners = object.new_owners?.map(e => bytesFromBase64(e)) || [];
        if (object.new_threshold !== undefined && object.new_threshold !== null) {
            message.newThreshold = bytesFromBase64(object.new_threshold);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.preOwners) {
            obj.pre_owners = message.preOwners.map(e => base64FromBytes(e));
        }
        else {
            obj.pre_owners = [];
        }
        obj.prev_threshold = message.prevThreshold ? base64FromBytes(message.prevThreshold) : undefined;
        if (message.newOwners) {
            obj.new_owners = message.newOwners.map(e => base64FromBytes(e));
        }
        else {
            obj.new_owners = [];
        }
        obj.new_threshold = message.newThreshold ? base64FromBytes(message.newThreshold) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return EventMultisigOwnershipTransferred.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventMultisigOwnershipTransferred.decode(message.value);
    },
    toProto(message) {
        return EventMultisigOwnershipTransferred.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.EventMultisigOwnershipTransferred",
            value: EventMultisigOwnershipTransferred.encode(message).finish()
        };
    }
};
function createBaseEventMultisigOperatorshipTransferred() {
    return {
        newOperators: [],
        newThreshold: new Uint8Array(),
        newWeights: []
    };
}
export const EventMultisigOperatorshipTransferred = {
    typeUrl: "/axelar.evm.v1beta1.EventMultisigOperatorshipTransferred",
    encode(message, writer = BinaryWriter.create()) {
        for (const v of message.newOperators) {
            writer.uint32(26).bytes(v);
        }
        if (message.newThreshold.length !== 0) {
            writer.uint32(34).bytes(message.newThreshold);
        }
        for (const v of message.newWeights) {
            writer.uint32(42).bytes(v);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            newOperators: Array.isArray(object?.newOperators) ? object.newOperators.map((e) => bytesFromBase64(e)) : [],
            newThreshold: isSet(object.newThreshold) ? bytesFromBase64(object.newThreshold) : new Uint8Array(),
            newWeights: Array.isArray(object?.newWeights) ? object.newWeights.map((e) => bytesFromBase64(e)) : []
        };
    },
    fromPartial(object) {
        const message = createBaseEventMultisigOperatorshipTransferred();
        message.newOperators = object.newOperators?.map(e => e) || [];
        message.newThreshold = object.newThreshold ?? new Uint8Array();
        message.newWeights = object.newWeights?.map(e => e) || [];
        return message;
    },
    fromAmino(object) {
        const message = createBaseEventMultisigOperatorshipTransferred();
        message.newOperators = object.new_operators?.map(e => bytesFromBase64(e)) || [];
        if (object.new_threshold !== undefined && object.new_threshold !== null) {
            message.newThreshold = bytesFromBase64(object.new_threshold);
        }
        message.newWeights = object.new_weights?.map(e => bytesFromBase64(e)) || [];
        return message;
    },
    toAmino(message) {
        const obj = {};
        if (message.newOperators) {
            obj.new_operators = message.newOperators.map(e => base64FromBytes(e));
        }
        else {
            obj.new_operators = [];
        }
        obj.new_threshold = message.newThreshold ? base64FromBytes(message.newThreshold) : undefined;
        if (message.newWeights) {
            obj.new_weights = message.newWeights.map(e => base64FromBytes(e));
        }
        else {
            obj.new_weights = [];
        }
        return obj;
    },
    fromAminoMsg(object) {
        return EventMultisigOperatorshipTransferred.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return EventMultisigOperatorshipTransferred.decode(message.value);
    },
    toProto(message) {
        return EventMultisigOperatorshipTransferred.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.EventMultisigOperatorshipTransferred",
            value: EventMultisigOperatorshipTransferred.encode(message).finish()
        };
    }
};
function createBaseNetworkInfo() {
    return {
        name: "",
        id: new Uint8Array()
    };
}
export const NetworkInfo = {
    typeUrl: "/axelar.evm.v1beta1.NetworkInfo",
    encode(message, writer = BinaryWriter.create()) {
        if (message.name !== "") {
            writer.uint32(10).string(message.name);
        }
        if (message.id.length !== 0) {
            writer.uint32(18).bytes(message.id);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            name: isSet(object.name) ? String(object.name) : "",
            id: isSet(object.id) ? bytesFromBase64(object.id) : new Uint8Array()
        };
    },
    fromPartial(object) {
        const message = createBaseNetworkInfo();
        message.name = object.name ?? "";
        message.id = object.id ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseNetworkInfo();
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        if (object.id !== undefined && object.id !== null) {
            message.id = bytesFromBase64(object.id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.name = message.name;
        obj.id = message.id ? base64FromBytes(message.id) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return NetworkInfo.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return NetworkInfo.decode(message.value);
    },
    toProto(message) {
        return NetworkInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.NetworkInfo",
            value: NetworkInfo.encode(message).finish()
        };
    }
};
function createBaseBurnerInfo() {
    return {
        burnerAddress: new Uint8Array(),
        tokenAddress: new Uint8Array(),
        destinationChain: "",
        symbol: "",
        asset: "",
        salt: new Uint8Array()
    };
}
export const BurnerInfo = {
    typeUrl: "/axelar.evm.v1beta1.BurnerInfo",
    encode(message, writer = BinaryWriter.create()) {
        if (message.burnerAddress.length !== 0) {
            writer.uint32(10).bytes(message.burnerAddress);
        }
        if (message.tokenAddress.length !== 0) {
            writer.uint32(18).bytes(message.tokenAddress);
        }
        if (message.destinationChain !== "") {
            writer.uint32(26).string(message.destinationChain);
        }
        if (message.symbol !== "") {
            writer.uint32(34).string(message.symbol);
        }
        if (message.asset !== "") {
            writer.uint32(42).string(message.asset);
        }
        if (message.salt.length !== 0) {
            writer.uint32(50).bytes(message.salt);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            burnerAddress: isSet(object.burnerAddress) ? bytesFromBase64(object.burnerAddress) : new Uint8Array(),
            tokenAddress: isSet(object.tokenAddress) ? bytesFromBase64(object.tokenAddress) : new Uint8Array(),
            destinationChain: isSet(object.destinationChain) ? String(object.destinationChain) : "",
            symbol: isSet(object.symbol) ? String(object.symbol) : "",
            asset: isSet(object.asset) ? String(object.asset) : "",
            salt: isSet(object.salt) ? bytesFromBase64(object.salt) : new Uint8Array()
        };
    },
    fromPartial(object) {
        const message = createBaseBurnerInfo();
        message.burnerAddress = object.burnerAddress ?? new Uint8Array();
        message.tokenAddress = object.tokenAddress ?? new Uint8Array();
        message.destinationChain = object.destinationChain ?? "";
        message.symbol = object.symbol ?? "";
        message.asset = object.asset ?? "";
        message.salt = object.salt ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseBurnerInfo();
        if (object.burner_address !== undefined && object.burner_address !== null) {
            message.burnerAddress = bytesFromBase64(object.burner_address);
        }
        if (object.token_address !== undefined && object.token_address !== null) {
            message.tokenAddress = bytesFromBase64(object.token_address);
        }
        if (object.destination_chain !== undefined && object.destination_chain !== null) {
            message.destinationChain = object.destination_chain;
        }
        if (object.symbol !== undefined && object.symbol !== null) {
            message.symbol = object.symbol;
        }
        if (object.asset !== undefined && object.asset !== null) {
            message.asset = object.asset;
        }
        if (object.salt !== undefined && object.salt !== null) {
            message.salt = bytesFromBase64(object.salt);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.burner_address = message.burnerAddress ? base64FromBytes(message.burnerAddress) : undefined;
        obj.token_address = message.tokenAddress ? base64FromBytes(message.tokenAddress) : undefined;
        obj.destination_chain = message.destinationChain;
        obj.symbol = message.symbol;
        obj.asset = message.asset;
        obj.salt = message.salt ? base64FromBytes(message.salt) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return BurnerInfo.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return BurnerInfo.decode(message.value);
    },
    toProto(message) {
        return BurnerInfo.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.BurnerInfo",
            value: BurnerInfo.encode(message).finish()
        };
    }
};
function createBaseERC20Deposit() {
    return {
        txId: new Uint8Array(),
        amount: new Uint8Array(),
        asset: "",
        destinationChain: "",
        burnerAddress: new Uint8Array(),
        logIndex: BigInt(0)
    };
}
export const ERC20Deposit = {
    typeUrl: "/axelar.evm.v1beta1.ERC20Deposit",
    encode(message, writer = BinaryWriter.create()) {
        if (message.txId.length !== 0) {
            writer.uint32(10).bytes(message.txId);
        }
        if (message.amount.length !== 0) {
            writer.uint32(18).bytes(message.amount);
        }
        if (message.asset !== "") {
            writer.uint32(26).string(message.asset);
        }
        if (message.destinationChain !== "") {
            writer.uint32(34).string(message.destinationChain);
        }
        if (message.burnerAddress.length !== 0) {
            writer.uint32(42).bytes(message.burnerAddress);
        }
        if (message.logIndex !== BigInt(0)) {
            writer.uint32(48).uint64(message.logIndex);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            txId: isSet(object.txId) ? bytesFromBase64(object.txId) : new Uint8Array(),
            amount: isSet(object.amount) ? bytesFromBase64(object.amount) : new Uint8Array(),
            asset: isSet(object.asset) ? String(object.asset) : "",
            destinationChain: isSet(object.destinationChain) ? String(object.destinationChain) : "",
            burnerAddress: isSet(object.burnerAddress) ? bytesFromBase64(object.burnerAddress) : new Uint8Array(),
            logIndex: isSet(object.logIndex) ? BigInt(object.logIndex.toString()) : BigInt(0)
        };
    },
    fromPartial(object) {
        const message = createBaseERC20Deposit();
        message.txId = object.txId ?? new Uint8Array();
        message.amount = object.amount ?? new Uint8Array();
        message.asset = object.asset ?? "";
        message.destinationChain = object.destinationChain ?? "";
        message.burnerAddress = object.burnerAddress ?? new Uint8Array();
        message.logIndex = object.logIndex !== undefined && object.logIndex !== null ? BigInt(object.logIndex.toString()) : BigInt(0);
        return message;
    },
    fromAmino(object) {
        const message = createBaseERC20Deposit();
        if (object.tx_id !== undefined && object.tx_id !== null) {
            message.txId = bytesFromBase64(object.tx_id);
        }
        if (object.amount !== undefined && object.amount !== null) {
            message.amount = bytesFromBase64(object.amount);
        }
        if (object.asset !== undefined && object.asset !== null) {
            message.asset = object.asset;
        }
        if (object.destination_chain !== undefined && object.destination_chain !== null) {
            message.destinationChain = object.destination_chain;
        }
        if (object.burner_address !== undefined && object.burner_address !== null) {
            message.burnerAddress = bytesFromBase64(object.burner_address);
        }
        if (object.log_index !== undefined && object.log_index !== null) {
            message.logIndex = BigInt(object.log_index);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.tx_id = message.txId ? base64FromBytes(message.txId) : undefined;
        obj.amount = message.amount ? base64FromBytes(message.amount) : undefined;
        obj.asset = message.asset;
        obj.destination_chain = message.destinationChain;
        obj.burner_address = message.burnerAddress ? base64FromBytes(message.burnerAddress) : undefined;
        obj.log_index = message.logIndex ? message.logIndex.toString() : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ERC20Deposit.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ERC20Deposit.decode(message.value);
    },
    toProto(message) {
        return ERC20Deposit.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.ERC20Deposit",
            value: ERC20Deposit.encode(message).finish()
        };
    }
};
function createBaseERC20TokenMetadata() {
    return {
        asset: "",
        chainId: new Uint8Array(),
        details: TokenDetails.fromPartial({}),
        tokenAddress: "",
        txHash: "",
        status: 0,
        isExternal: false,
        burnerCode: new Uint8Array()
    };
}
export const ERC20TokenMetadata = {
    typeUrl: "/axelar.evm.v1beta1.ERC20TokenMetadata",
    encode(message, writer = BinaryWriter.create()) {
        if (message.asset !== "") {
            writer.uint32(10).string(message.asset);
        }
        if (message.chainId.length !== 0) {
            writer.uint32(18).bytes(message.chainId);
        }
        if (message.details !== undefined) {
            TokenDetails.encode(message.details, writer.uint32(26).fork()).ldelim();
        }
        if (message.tokenAddress !== "") {
            writer.uint32(34).string(message.tokenAddress);
        }
        if (message.txHash !== "") {
            writer.uint32(42).string(message.txHash);
        }
        if (message.status !== 0) {
            writer.uint32(56).int32(message.status);
        }
        if (message.isExternal === true) {
            writer.uint32(64).bool(message.isExternal);
        }
        if (message.burnerCode.length !== 0) {
            writer.uint32(74).bytes(message.burnerCode);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            asset: isSet(object.asset) ? String(object.asset) : "",
            chainId: isSet(object.chainId) ? bytesFromBase64(object.chainId) : new Uint8Array(),
            details: isSet(object.details) ? TokenDetails.fromJSON(object.details) : undefined,
            tokenAddress: isSet(object.tokenAddress) ? String(object.tokenAddress) : "",
            txHash: isSet(object.txHash) ? String(object.txHash) : "",
            status: isSet(object.status) ? statusFromJSON(object.status) : -1,
            isExternal: isSet(object.isExternal) ? Boolean(object.isExternal) : false,
            burnerCode: isSet(object.burnerCode) ? bytesFromBase64(object.burnerCode) : new Uint8Array()
        };
    },
    fromPartial(object) {
        const message = createBaseERC20TokenMetadata();
        message.asset = object.asset ?? "";
        message.chainId = object.chainId ?? new Uint8Array();
        message.details = object.details !== undefined && object.details !== null ? TokenDetails.fromPartial(object.details) : undefined;
        message.tokenAddress = object.tokenAddress ?? "";
        message.txHash = object.txHash ?? "";
        message.status = object.status ?? 0;
        message.isExternal = object.isExternal ?? false;
        message.burnerCode = object.burnerCode ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseERC20TokenMetadata();
        if (object.asset !== undefined && object.asset !== null) {
            message.asset = object.asset;
        }
        if (object.chain_id !== undefined && object.chain_id !== null) {
            message.chainId = bytesFromBase64(object.chain_id);
        }
        if (object.details !== undefined && object.details !== null) {
            message.details = TokenDetails.fromAmino(object.details);
        }
        if (object.token_address !== undefined && object.token_address !== null) {
            message.tokenAddress = object.token_address;
        }
        if (object.tx_hash !== undefined && object.tx_hash !== null) {
            message.txHash = object.tx_hash;
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = statusFromJSON(object.status);
        }
        if (object.is_external !== undefined && object.is_external !== null) {
            message.isExternal = object.is_external;
        }
        if (object.burner_code !== undefined && object.burner_code !== null) {
            message.burnerCode = bytesFromBase64(object.burner_code);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.asset = message.asset;
        obj.chain_id = message.chainId ? base64FromBytes(message.chainId) : undefined;
        obj.details = message.details ? TokenDetails.toAmino(message.details) : undefined;
        obj.token_address = message.tokenAddress;
        obj.tx_hash = message.txHash;
        obj.status = message.status;
        obj.is_external = message.isExternal;
        obj.burner_code = message.burnerCode ? base64FromBytes(message.burnerCode) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return ERC20TokenMetadata.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return ERC20TokenMetadata.decode(message.value);
    },
    toProto(message) {
        return ERC20TokenMetadata.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.ERC20TokenMetadata",
            value: ERC20TokenMetadata.encode(message).finish()
        };
    }
};
function createBaseTransactionMetadata() {
    return {
        rawTx: new Uint8Array(),
        pubKey: new Uint8Array()
    };
}
export const TransactionMetadata = {
    typeUrl: "/axelar.evm.v1beta1.TransactionMetadata",
    encode(message, writer = BinaryWriter.create()) {
        if (message.rawTx.length !== 0) {
            writer.uint32(10).bytes(message.rawTx);
        }
        if (message.pubKey.length !== 0) {
            writer.uint32(18).bytes(message.pubKey);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            rawTx: isSet(object.rawTx) ? bytesFromBase64(object.rawTx) : new Uint8Array(),
            pubKey: isSet(object.pubKey) ? bytesFromBase64(object.pubKey) : new Uint8Array()
        };
    },
    fromPartial(object) {
        const message = createBaseTransactionMetadata();
        message.rawTx = object.rawTx ?? new Uint8Array();
        message.pubKey = object.pubKey ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseTransactionMetadata();
        if (object.raw_tx !== undefined && object.raw_tx !== null) {
            message.rawTx = bytesFromBase64(object.raw_tx);
        }
        if (object.pub_key !== undefined && object.pub_key !== null) {
            message.pubKey = bytesFromBase64(object.pub_key);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.raw_tx = message.rawTx ? base64FromBytes(message.rawTx) : undefined;
        obj.pub_key = message.pubKey ? base64FromBytes(message.pubKey) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return TransactionMetadata.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return TransactionMetadata.decode(message.value);
    },
    toProto(message) {
        return TransactionMetadata.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.TransactionMetadata",
            value: TransactionMetadata.encode(message).finish()
        };
    }
};
function createBaseCommand() {
    return {
        id: new Uint8Array(),
        command: "",
        params: new Uint8Array(),
        keyId: "",
        maxGasCost: 0,
        type: 0
    };
}
export const Command = {
    typeUrl: "/axelar.evm.v1beta1.Command",
    encode(message, writer = BinaryWriter.create()) {
        if (message.id.length !== 0) {
            writer.uint32(10).bytes(message.id);
        }
        if (message.command !== "") {
            writer.uint32(18).string(message.command);
        }
        if (message.params.length !== 0) {
            writer.uint32(26).bytes(message.params);
        }
        if (message.keyId !== "") {
            writer.uint32(34).string(message.keyId);
        }
        if (message.maxGasCost !== 0) {
            writer.uint32(40).uint32(message.maxGasCost);
        }
        if (message.type !== 0) {
            writer.uint32(48).int32(message.type);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            id: isSet(object.id) ? bytesFromBase64(object.id) : new Uint8Array(),
            command: isSet(object.command) ? String(object.command) : "",
            params: isSet(object.params) ? bytesFromBase64(object.params) : new Uint8Array(),
            keyId: isSet(object.keyId) ? String(object.keyId) : "",
            maxGasCost: isSet(object.maxGasCost) ? Number(object.maxGasCost) : 0,
            type: isSet(object.type) ? commandTypeFromJSON(object.type) : -1
        };
    },
    fromPartial(object) {
        const message = createBaseCommand();
        message.id = object.id ?? new Uint8Array();
        message.command = object.command ?? "";
        message.params = object.params ?? new Uint8Array();
        message.keyId = object.keyId ?? "";
        message.maxGasCost = object.maxGasCost ?? 0;
        message.type = object.type ?? 0;
        return message;
    },
    fromAmino(object) {
        const message = createBaseCommand();
        if (object.id !== undefined && object.id !== null) {
            message.id = bytesFromBase64(object.id);
        }
        if (object.command !== undefined && object.command !== null) {
            message.command = object.command;
        }
        if (object.params !== undefined && object.params !== null) {
            message.params = bytesFromBase64(object.params);
        }
        if (object.key_id !== undefined && object.key_id !== null) {
            message.keyId = object.key_id;
        }
        if (object.max_gas_cost !== undefined && object.max_gas_cost !== null) {
            message.maxGasCost = object.max_gas_cost;
        }
        if (object.type !== undefined && object.type !== null) {
            message.type = commandTypeFromJSON(object.type);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id ? base64FromBytes(message.id) : undefined;
        obj.command = message.command;
        obj.params = message.params ? base64FromBytes(message.params) : undefined;
        obj.key_id = message.keyId;
        obj.max_gas_cost = message.maxGasCost;
        obj.type = message.type;
        return obj;
    },
    fromAminoMsg(object) {
        return Command.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Command.decode(message.value);
    },
    toProto(message) {
        return Command.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.Command",
            value: Command.encode(message).finish()
        };
    }
};
function createBaseCommandBatchMetadata() {
    return {
        id: new Uint8Array(),
        commandIds: [],
        data: new Uint8Array(),
        sigHash: new Uint8Array(),
        status: 0,
        keyId: "",
        prevBatchedCommandsId: new Uint8Array(),
        signature: undefined
    };
}
export const CommandBatchMetadata = {
    typeUrl: "/axelar.evm.v1beta1.CommandBatchMetadata",
    encode(message, writer = BinaryWriter.create()) {
        if (message.id.length !== 0) {
            writer.uint32(10).bytes(message.id);
        }
        for (const v of message.commandIds) {
            writer.uint32(18).bytes(v);
        }
        if (message.data.length !== 0) {
            writer.uint32(26).bytes(message.data);
        }
        if (message.sigHash.length !== 0) {
            writer.uint32(34).bytes(message.sigHash);
        }
        if (message.status !== 0) {
            writer.uint32(40).int32(message.status);
        }
        if (message.keyId !== "") {
            writer.uint32(50).string(message.keyId);
        }
        if (message.prevBatchedCommandsId.length !== 0) {
            writer.uint32(58).bytes(message.prevBatchedCommandsId);
        }
        if (message.signature !== undefined) {
            Any.encode(message.signature, writer.uint32(66).fork()).ldelim();
        }
        return writer;
    },
    fromJSON(object) {
        return {
            id: isSet(object.id) ? bytesFromBase64(object.id) : new Uint8Array(),
            commandIds: Array.isArray(object?.commandIds) ? object.commandIds.map((e) => bytesFromBase64(e)) : [],
            data: isSet(object.data) ? bytesFromBase64(object.data) : new Uint8Array(),
            sigHash: isSet(object.sigHash) ? bytesFromBase64(object.sigHash) : new Uint8Array(),
            status: isSet(object.status) ? batchedCommandsStatusFromJSON(object.status) : -1,
            keyId: isSet(object.keyId) ? String(object.keyId) : "",
            prevBatchedCommandsId: isSet(object.prevBatchedCommandsId) ? bytesFromBase64(object.prevBatchedCommandsId) : new Uint8Array(),
            signature: isSet(object.signature) ? Any.fromJSON(object.signature) : undefined
        };
    },
    fromPartial(object) {
        const message = createBaseCommandBatchMetadata();
        message.id = object.id ?? new Uint8Array();
        message.commandIds = object.commandIds?.map(e => e) || [];
        message.data = object.data ?? new Uint8Array();
        message.sigHash = object.sigHash ?? new Uint8Array();
        message.status = object.status ?? 0;
        message.keyId = object.keyId ?? "";
        message.prevBatchedCommandsId = object.prevBatchedCommandsId ?? new Uint8Array();
        message.signature = object.signature !== undefined && object.signature !== null ? Any.fromPartial(object.signature) : undefined;
        return message;
    },
    fromAmino(object) {
        const message = createBaseCommandBatchMetadata();
        if (object.id !== undefined && object.id !== null) {
            message.id = bytesFromBase64(object.id);
        }
        message.commandIds = object.command_ids?.map(e => bytesFromBase64(e)) || [];
        if (object.data !== undefined && object.data !== null) {
            message.data = bytesFromBase64(object.data);
        }
        if (object.sig_hash !== undefined && object.sig_hash !== null) {
            message.sigHash = bytesFromBase64(object.sig_hash);
        }
        if (object.status !== undefined && object.status !== null) {
            message.status = batchedCommandsStatusFromJSON(object.status);
        }
        if (object.key_id !== undefined && object.key_id !== null) {
            message.keyId = object.key_id;
        }
        if (object.prev_batched_commands_id !== undefined && object.prev_batched_commands_id !== null) {
            message.prevBatchedCommandsId = bytesFromBase64(object.prev_batched_commands_id);
        }
        if (object.signature !== undefined && object.signature !== null) {
            message.signature = Github_com_cosmos_codec_ProtoMarshaler_FromAmino(object.signature);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.id = message.id ? base64FromBytes(message.id) : undefined;
        if (message.commandIds) {
            obj.command_ids = message.commandIds.map(e => base64FromBytes(e));
        }
        else {
            obj.command_ids = [];
        }
        obj.data = message.data ? base64FromBytes(message.data) : undefined;
        obj.sig_hash = message.sigHash ? base64FromBytes(message.sigHash) : undefined;
        obj.status = message.status;
        obj.key_id = message.keyId;
        obj.prev_batched_commands_id = message.prevBatchedCommandsId ? base64FromBytes(message.prevBatchedCommandsId) : undefined;
        obj.signature = message.signature ? Github_com_cosmos_codec_ProtoMarshaler_ToAmino(message.signature) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return CommandBatchMetadata.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return CommandBatchMetadata.decode(message.value);
    },
    toProto(message) {
        return CommandBatchMetadata.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.CommandBatchMetadata",
            value: CommandBatchMetadata.encode(message).finish()
        };
    }
};
function createBaseSigMetadata() {
    return {
        type: 0,
        chain: "",
        commandBatchId: new Uint8Array()
    };
}
export const SigMetadata = {
    typeUrl: "/axelar.evm.v1beta1.SigMetadata",
    encode(message, writer = BinaryWriter.create()) {
        if (message.type !== 0) {
            writer.uint32(8).int32(message.type);
        }
        if (message.chain !== "") {
            writer.uint32(18).string(message.chain);
        }
        if (message.commandBatchId.length !== 0) {
            writer.uint32(26).bytes(message.commandBatchId);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            type: isSet(object.type) ? sigTypeFromJSON(object.type) : -1,
            chain: isSet(object.chain) ? String(object.chain) : "",
            commandBatchId: isSet(object.commandBatchId) ? bytesFromBase64(object.commandBatchId) : new Uint8Array()
        };
    },
    fromPartial(object) {
        const message = createBaseSigMetadata();
        message.type = object.type ?? 0;
        message.chain = object.chain ?? "";
        message.commandBatchId = object.commandBatchId ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseSigMetadata();
        if (object.type !== undefined && object.type !== null) {
            message.type = sigTypeFromJSON(object.type);
        }
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = object.chain;
        }
        if (object.command_batch_id !== undefined && object.command_batch_id !== null) {
            message.commandBatchId = bytesFromBase64(object.command_batch_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.type = message.type;
        obj.chain = message.chain;
        obj.command_batch_id = message.commandBatchId ? base64FromBytes(message.commandBatchId) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return SigMetadata.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return SigMetadata.decode(message.value);
    },
    toProto(message) {
        return SigMetadata.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.SigMetadata",
            value: SigMetadata.encode(message).finish()
        };
    }
};
function createBaseTransferKey() {
    return {
        txId: new Uint8Array(),
        nextKeyId: ""
    };
}
export const TransferKey = {
    typeUrl: "/axelar.evm.v1beta1.TransferKey",
    encode(message, writer = BinaryWriter.create()) {
        if (message.txId.length !== 0) {
            writer.uint32(10).bytes(message.txId);
        }
        if (message.nextKeyId !== "") {
            writer.uint32(26).string(message.nextKeyId);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            txId: isSet(object.txId) ? bytesFromBase64(object.txId) : new Uint8Array(),
            nextKeyId: isSet(object.nextKeyId) ? String(object.nextKeyId) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseTransferKey();
        message.txId = object.txId ?? new Uint8Array();
        message.nextKeyId = object.nextKeyId ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseTransferKey();
        if (object.tx_id !== undefined && object.tx_id !== null) {
            message.txId = bytesFromBase64(object.tx_id);
        }
        if (object.next_key_id !== undefined && object.next_key_id !== null) {
            message.nextKeyId = object.next_key_id;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.tx_id = message.txId ? base64FromBytes(message.txId) : undefined;
        obj.next_key_id = message.nextKeyId;
        return obj;
    },
    fromAminoMsg(object) {
        return TransferKey.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return TransferKey.decode(message.value);
    },
    toProto(message) {
        return TransferKey.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.TransferKey",
            value: TransferKey.encode(message).finish()
        };
    }
};
function createBaseAsset() {
    return {
        chain: "",
        name: ""
    };
}
export const Asset = {
    typeUrl: "/axelar.evm.v1beta1.Asset",
    encode(message, writer = BinaryWriter.create()) {
        if (message.chain !== "") {
            writer.uint32(10).string(message.chain);
        }
        if (message.name !== "") {
            writer.uint32(18).string(message.name);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            chain: isSet(object.chain) ? String(object.chain) : "",
            name: isSet(object.name) ? String(object.name) : ""
        };
    },
    fromPartial(object) {
        const message = createBaseAsset();
        message.chain = object.chain ?? "";
        message.name = object.name ?? "";
        return message;
    },
    fromAmino(object) {
        const message = createBaseAsset();
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = object.chain;
        }
        if (object.name !== undefined && object.name !== null) {
            message.name = object.name;
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.chain = message.chain;
        obj.name = message.name;
        return obj;
    },
    fromAminoMsg(object) {
        return Asset.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Asset.decode(message.value);
    },
    toProto(message) {
        return Asset.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.Asset",
            value: Asset.encode(message).finish()
        };
    }
};
function createBaseTokenDetails() {
    return {
        tokenName: "",
        symbol: "",
        decimals: 0,
        capacity: new Uint8Array()
    };
}
export const TokenDetails = {
    typeUrl: "/axelar.evm.v1beta1.TokenDetails",
    encode(message, writer = BinaryWriter.create()) {
        if (message.tokenName !== "") {
            writer.uint32(10).string(message.tokenName);
        }
        if (message.symbol !== "") {
            writer.uint32(18).string(message.symbol);
        }
        if (message.decimals !== 0) {
            writer.uint32(24).uint32(message.decimals);
        }
        if (message.capacity.length !== 0) {
            writer.uint32(34).bytes(message.capacity);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            tokenName: isSet(object.tokenName) ? String(object.tokenName) : "",
            symbol: isSet(object.symbol) ? String(object.symbol) : "",
            decimals: isSet(object.decimals) ? Number(object.decimals) : 0,
            capacity: isSet(object.capacity) ? bytesFromBase64(object.capacity) : new Uint8Array()
        };
    },
    fromPartial(object) {
        const message = createBaseTokenDetails();
        message.tokenName = object.tokenName ?? "";
        message.symbol = object.symbol ?? "";
        message.decimals = object.decimals ?? 0;
        message.capacity = object.capacity ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseTokenDetails();
        if (object.token_name !== undefined && object.token_name !== null) {
            message.tokenName = object.token_name;
        }
        if (object.symbol !== undefined && object.symbol !== null) {
            message.symbol = object.symbol;
        }
        if (object.decimals !== undefined && object.decimals !== null) {
            message.decimals = object.decimals;
        }
        if (object.capacity !== undefined && object.capacity !== null) {
            message.capacity = bytesFromBase64(object.capacity);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.token_name = message.tokenName;
        obj.symbol = message.symbol;
        obj.decimals = message.decimals;
        obj.capacity = message.capacity ? base64FromBytes(message.capacity) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return TokenDetails.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return TokenDetails.decode(message.value);
    },
    toProto(message) {
        return TokenDetails.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.TokenDetails",
            value: TokenDetails.encode(message).finish()
        };
    }
};
function createBaseGateway() {
    return {
        address: new Uint8Array()
    };
}
export const Gateway = {
    typeUrl: "/axelar.evm.v1beta1.Gateway",
    encode(message, writer = BinaryWriter.create()) {
        if (message.address.length !== 0) {
            writer.uint32(10).bytes(message.address);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            address: isSet(object.address) ? bytesFromBase64(object.address) : new Uint8Array()
        };
    },
    fromPartial(object) {
        const message = createBaseGateway();
        message.address = object.address ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBaseGateway();
        if (object.address !== undefined && object.address !== null) {
            message.address = bytesFromBase64(object.address);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.address = message.address ? base64FromBytes(message.address) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return Gateway.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return Gateway.decode(message.value);
    },
    toProto(message) {
        return Gateway.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.Gateway",
            value: Gateway.encode(message).finish()
        };
    }
};
function createBasePollMetadata() {
    return {
        chain: "",
        txId: new Uint8Array()
    };
}
export const PollMetadata = {
    typeUrl: "/axelar.evm.v1beta1.PollMetadata",
    encode(message, writer = BinaryWriter.create()) {
        if (message.chain !== "") {
            writer.uint32(10).string(message.chain);
        }
        if (message.txId.length !== 0) {
            writer.uint32(18).bytes(message.txId);
        }
        return writer;
    },
    fromJSON(object) {
        return {
            chain: isSet(object.chain) ? String(object.chain) : "",
            txId: isSet(object.txId) ? bytesFromBase64(object.txId) : new Uint8Array()
        };
    },
    fromPartial(object) {
        const message = createBasePollMetadata();
        message.chain = object.chain ?? "";
        message.txId = object.txId ?? new Uint8Array();
        return message;
    },
    fromAmino(object) {
        const message = createBasePollMetadata();
        if (object.chain !== undefined && object.chain !== null) {
            message.chain = object.chain;
        }
        if (object.tx_id !== undefined && object.tx_id !== null) {
            message.txId = bytesFromBase64(object.tx_id);
        }
        return message;
    },
    toAmino(message) {
        const obj = {};
        obj.chain = message.chain;
        obj.tx_id = message.txId ? base64FromBytes(message.txId) : undefined;
        return obj;
    },
    fromAminoMsg(object) {
        return PollMetadata.fromAmino(object.value);
    },
    fromProtoMsg(message) {
        return PollMetadata.decode(message.value);
    },
    toProto(message) {
        return PollMetadata.encode(message).finish();
    },
    toProtoMsg(message) {
        return {
            typeUrl: "/axelar.evm.v1beta1.PollMetadata",
            value: PollMetadata.encode(message).finish()
        };
    }
};
export const Github_com_cosmos_codec_ProtoMarshaler_InterfaceDecoder = (input) => {
    const reader = input instanceof BinaryReader ? input : new BinaryReader(input);
    const data = Any.decode(reader, reader.uint32());
    switch (data.typeUrl) {
        default:
            return data;
    }
};
export const Github_com_cosmos_codec_ProtoMarshaler_FromAmino = (content) => {
    return Any.fromAmino(content);
};
export const Github_com_cosmos_codec_ProtoMarshaler_ToAmino = (content) => {
    return Any.toAmino(content);
};
//# sourceMappingURL=types.js.map