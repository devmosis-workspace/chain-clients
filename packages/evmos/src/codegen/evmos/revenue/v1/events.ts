import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/** EventRegisterRevenue is an event emitted when a contract is registered to receive a percentage of tx fees. */
export interface EventRegisterRevenue {
  /**
   * deployer_address is the bech32 address of message sender. It must be the same as the origin EOA
   * sending the transaction which deploys the contract
   */
  deployerAddress: string;
  /** contract_address in hex format */
  contractAddress: string;
  /**
   * effective_withdrawer is the withdrawer address that is stored after the
   * revenue registration is completed. It defaults to the deployer address if
   * the withdrawer address in the msg is omitted. When omitted, the withdraw map
   * doesn't need to be set.
   */
  effectiveWithdrawer: string;
}
export interface EventRegisterRevenueProtoMsg {
  typeUrl: "/evmos.revenue.v1.EventRegisterRevenue";
  value: Uint8Array;
}
/** EventRegisterRevenue is an event emitted when a contract is registered to receive a percentage of tx fees. */
export interface EventRegisterRevenueAmino {
  /**
   * deployer_address is the bech32 address of message sender. It must be the same as the origin EOA
   * sending the transaction which deploys the contract
   */
  deployer_address: string;
  /** contract_address in hex format */
  contract_address: string;
  /**
   * effective_withdrawer is the withdrawer address that is stored after the
   * revenue registration is completed. It defaults to the deployer address if
   * the withdrawer address in the msg is omitted. When omitted, the withdraw map
   * doesn't need to be set.
   */
  effective_withdrawer: string;
}
export interface EventRegisterRevenueAminoMsg {
  type: "/evmos.revenue.v1.EventRegisterRevenue";
  value: EventRegisterRevenueAmino;
}
/** EventRegisterRevenue is an event emitted when a contract is registered to receive a percentage of tx fees. */
export interface EventRegisterRevenueSDKType {
  deployer_address: string;
  contract_address: string;
  effective_withdrawer: string;
}
/** EventUpdateRevenue is an event emitted when a withdrawer address is updated for a contract. */
export interface EventUpdateRevenue {
  /** contract_address in hex format */
  contractAddress: string;
  /**
   * deployer_address is the bech32 address of message sender. It must be the same as the origin EOA
   * sending the transaction which deploys the contract
   */
  deployerAddress: string;
  /** withdrawer_address is the bech32 address of account receiving the transaction fees */
  withdrawerAddress: string;
}
export interface EventUpdateRevenueProtoMsg {
  typeUrl: "/evmos.revenue.v1.EventUpdateRevenue";
  value: Uint8Array;
}
/** EventUpdateRevenue is an event emitted when a withdrawer address is updated for a contract. */
export interface EventUpdateRevenueAmino {
  /** contract_address in hex format */
  contract_address: string;
  /**
   * deployer_address is the bech32 address of message sender. It must be the same as the origin EOA
   * sending the transaction which deploys the contract
   */
  deployer_address: string;
  /** withdrawer_address is the bech32 address of account receiving the transaction fees */
  withdrawer_address: string;
}
export interface EventUpdateRevenueAminoMsg {
  type: "/evmos.revenue.v1.EventUpdateRevenue";
  value: EventUpdateRevenueAmino;
}
/** EventUpdateRevenue is an event emitted when a withdrawer address is updated for a contract. */
export interface EventUpdateRevenueSDKType {
  contract_address: string;
  deployer_address: string;
  withdrawer_address: string;
}
/** EventCancelRevenue is an event emitted when a contract is unregistered from receiving tx fees. */
export interface EventCancelRevenue {
  /**
   * deployer_address is the bech32 address of message sender. It must be the same as the origin EOA
   * sending the transaction which deploys the contract
   */
  deployerAddress: string;
  /** contract_address in hex format */
  contractAddress: string;
}
export interface EventCancelRevenueProtoMsg {
  typeUrl: "/evmos.revenue.v1.EventCancelRevenue";
  value: Uint8Array;
}
/** EventCancelRevenue is an event emitted when a contract is unregistered from receiving tx fees. */
export interface EventCancelRevenueAmino {
  /**
   * deployer_address is the bech32 address of message sender. It must be the same as the origin EOA
   * sending the transaction which deploys the contract
   */
  deployer_address: string;
  /** contract_address in hex format */
  contract_address: string;
}
export interface EventCancelRevenueAminoMsg {
  type: "/evmos.revenue.v1.EventCancelRevenue";
  value: EventCancelRevenueAmino;
}
/** EventCancelRevenue is an event emitted when a contract is unregistered from receiving tx fees. */
export interface EventCancelRevenueSDKType {
  deployer_address: string;
  contract_address: string;
}
/** EventDistributeRevenue is an event emitted when a contract receives a percentage of tx fees. */
export interface EventDistributeRevenue {
  /** sender is the address of message sender. */
  sender: string;
  /** contract address in hex format */
  contract: string;
  /** withdrawer_address is the bech32 address of account receiving the transaction fees */
  withdrawerAddress: string;
  /** amount of revenue distributed */
  amount: string;
}
export interface EventDistributeRevenueProtoMsg {
  typeUrl: "/evmos.revenue.v1.EventDistributeRevenue";
  value: Uint8Array;
}
/** EventDistributeRevenue is an event emitted when a contract receives a percentage of tx fees. */
export interface EventDistributeRevenueAmino {
  /** sender is the address of message sender. */
  sender: string;
  /** contract address in hex format */
  contract: string;
  /** withdrawer_address is the bech32 address of account receiving the transaction fees */
  withdrawer_address: string;
  /** amount of revenue distributed */
  amount: string;
}
export interface EventDistributeRevenueAminoMsg {
  type: "/evmos.revenue.v1.EventDistributeRevenue";
  value: EventDistributeRevenueAmino;
}
/** EventDistributeRevenue is an event emitted when a contract receives a percentage of tx fees. */
export interface EventDistributeRevenueSDKType {
  sender: string;
  contract: string;
  withdrawer_address: string;
  amount: string;
}
function createBaseEventRegisterRevenue(): EventRegisterRevenue {
  return {
    deployerAddress: "",
    contractAddress: "",
    effectiveWithdrawer: ""
  };
}
export const EventRegisterRevenue = {
  typeUrl: "/evmos.revenue.v1.EventRegisterRevenue",
  encode(message: EventRegisterRevenue, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.deployerAddress !== "") {
      writer.uint32(10).string(message.deployerAddress);
    }
    if (message.contractAddress !== "") {
      writer.uint32(18).string(message.contractAddress);
    }
    if (message.effectiveWithdrawer !== "") {
      writer.uint32(26).string(message.effectiveWithdrawer);
    }
    return writer;
  },
  fromJSON(object: any): EventRegisterRevenue {
    return {
      deployerAddress: isSet(object.deployerAddress) ? String(object.deployerAddress) : "",
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      effectiveWithdrawer: isSet(object.effectiveWithdrawer) ? String(object.effectiveWithdrawer) : ""
    };
  },
  fromPartial(object: Partial<EventRegisterRevenue>): EventRegisterRevenue {
    const message = createBaseEventRegisterRevenue();
    message.deployerAddress = object.deployerAddress ?? "";
    message.contractAddress = object.contractAddress ?? "";
    message.effectiveWithdrawer = object.effectiveWithdrawer ?? "";
    return message;
  },
  fromAmino(object: EventRegisterRevenueAmino): EventRegisterRevenue {
    return {
      deployerAddress: object.deployer_address,
      contractAddress: object.contract_address,
      effectiveWithdrawer: object.effective_withdrawer
    };
  },
  toAmino(message: EventRegisterRevenue): EventRegisterRevenueAmino {
    const obj: any = {};
    obj.deployer_address = message.deployerAddress;
    obj.contract_address = message.contractAddress;
    obj.effective_withdrawer = message.effectiveWithdrawer;
    return obj;
  },
  fromAminoMsg(object: EventRegisterRevenueAminoMsg): EventRegisterRevenue {
    return EventRegisterRevenue.fromAmino(object.value);
  },
  fromProtoMsg(message: EventRegisterRevenueProtoMsg): EventRegisterRevenue {
    return EventRegisterRevenue.decode(message.value);
  },
  toProto(message: EventRegisterRevenue): Uint8Array {
    return EventRegisterRevenue.encode(message).finish();
  },
  toProtoMsg(message: EventRegisterRevenue): EventRegisterRevenueProtoMsg {
    return {
      typeUrl: "/evmos.revenue.v1.EventRegisterRevenue",
      value: EventRegisterRevenue.encode(message).finish()
    };
  }
};
function createBaseEventUpdateRevenue(): EventUpdateRevenue {
  return {
    contractAddress: "",
    deployerAddress: "",
    withdrawerAddress: ""
  };
}
export const EventUpdateRevenue = {
  typeUrl: "/evmos.revenue.v1.EventUpdateRevenue",
  encode(message: EventUpdateRevenue, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.contractAddress !== "") {
      writer.uint32(10).string(message.contractAddress);
    }
    if (message.deployerAddress !== "") {
      writer.uint32(18).string(message.deployerAddress);
    }
    if (message.withdrawerAddress !== "") {
      writer.uint32(26).string(message.withdrawerAddress);
    }
    return writer;
  },
  fromJSON(object: any): EventUpdateRevenue {
    return {
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : "",
      deployerAddress: isSet(object.deployerAddress) ? String(object.deployerAddress) : "",
      withdrawerAddress: isSet(object.withdrawerAddress) ? String(object.withdrawerAddress) : ""
    };
  },
  fromPartial(object: Partial<EventUpdateRevenue>): EventUpdateRevenue {
    const message = createBaseEventUpdateRevenue();
    message.contractAddress = object.contractAddress ?? "";
    message.deployerAddress = object.deployerAddress ?? "";
    message.withdrawerAddress = object.withdrawerAddress ?? "";
    return message;
  },
  fromAmino(object: EventUpdateRevenueAmino): EventUpdateRevenue {
    return {
      contractAddress: object.contract_address,
      deployerAddress: object.deployer_address,
      withdrawerAddress: object.withdrawer_address
    };
  },
  toAmino(message: EventUpdateRevenue): EventUpdateRevenueAmino {
    const obj: any = {};
    obj.contract_address = message.contractAddress;
    obj.deployer_address = message.deployerAddress;
    obj.withdrawer_address = message.withdrawerAddress;
    return obj;
  },
  fromAminoMsg(object: EventUpdateRevenueAminoMsg): EventUpdateRevenue {
    return EventUpdateRevenue.fromAmino(object.value);
  },
  fromProtoMsg(message: EventUpdateRevenueProtoMsg): EventUpdateRevenue {
    return EventUpdateRevenue.decode(message.value);
  },
  toProto(message: EventUpdateRevenue): Uint8Array {
    return EventUpdateRevenue.encode(message).finish();
  },
  toProtoMsg(message: EventUpdateRevenue): EventUpdateRevenueProtoMsg {
    return {
      typeUrl: "/evmos.revenue.v1.EventUpdateRevenue",
      value: EventUpdateRevenue.encode(message).finish()
    };
  }
};
function createBaseEventCancelRevenue(): EventCancelRevenue {
  return {
    deployerAddress: "",
    contractAddress: ""
  };
}
export const EventCancelRevenue = {
  typeUrl: "/evmos.revenue.v1.EventCancelRevenue",
  encode(message: EventCancelRevenue, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.deployerAddress !== "") {
      writer.uint32(10).string(message.deployerAddress);
    }
    if (message.contractAddress !== "") {
      writer.uint32(18).string(message.contractAddress);
    }
    return writer;
  },
  fromJSON(object: any): EventCancelRevenue {
    return {
      deployerAddress: isSet(object.deployerAddress) ? String(object.deployerAddress) : "",
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : ""
    };
  },
  fromPartial(object: Partial<EventCancelRevenue>): EventCancelRevenue {
    const message = createBaseEventCancelRevenue();
    message.deployerAddress = object.deployerAddress ?? "";
    message.contractAddress = object.contractAddress ?? "";
    return message;
  },
  fromAmino(object: EventCancelRevenueAmino): EventCancelRevenue {
    return {
      deployerAddress: object.deployer_address,
      contractAddress: object.contract_address
    };
  },
  toAmino(message: EventCancelRevenue): EventCancelRevenueAmino {
    const obj: any = {};
    obj.deployer_address = message.deployerAddress;
    obj.contract_address = message.contractAddress;
    return obj;
  },
  fromAminoMsg(object: EventCancelRevenueAminoMsg): EventCancelRevenue {
    return EventCancelRevenue.fromAmino(object.value);
  },
  fromProtoMsg(message: EventCancelRevenueProtoMsg): EventCancelRevenue {
    return EventCancelRevenue.decode(message.value);
  },
  toProto(message: EventCancelRevenue): Uint8Array {
    return EventCancelRevenue.encode(message).finish();
  },
  toProtoMsg(message: EventCancelRevenue): EventCancelRevenueProtoMsg {
    return {
      typeUrl: "/evmos.revenue.v1.EventCancelRevenue",
      value: EventCancelRevenue.encode(message).finish()
    };
  }
};
function createBaseEventDistributeRevenue(): EventDistributeRevenue {
  return {
    sender: "",
    contract: "",
    withdrawerAddress: "",
    amount: ""
  };
}
export const EventDistributeRevenue = {
  typeUrl: "/evmos.revenue.v1.EventDistributeRevenue",
  encode(message: EventDistributeRevenue, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.contract !== "") {
      writer.uint32(18).string(message.contract);
    }
    if (message.withdrawerAddress !== "") {
      writer.uint32(26).string(message.withdrawerAddress);
    }
    if (message.amount !== "") {
      writer.uint32(34).string(message.amount);
    }
    return writer;
  },
  fromJSON(object: any): EventDistributeRevenue {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      contract: isSet(object.contract) ? String(object.contract) : "",
      withdrawerAddress: isSet(object.withdrawerAddress) ? String(object.withdrawerAddress) : "",
      amount: isSet(object.amount) ? String(object.amount) : ""
    };
  },
  fromPartial(object: Partial<EventDistributeRevenue>): EventDistributeRevenue {
    const message = createBaseEventDistributeRevenue();
    message.sender = object.sender ?? "";
    message.contract = object.contract ?? "";
    message.withdrawerAddress = object.withdrawerAddress ?? "";
    message.amount = object.amount ?? "";
    return message;
  },
  fromAmino(object: EventDistributeRevenueAmino): EventDistributeRevenue {
    return {
      sender: object.sender,
      contract: object.contract,
      withdrawerAddress: object.withdrawer_address,
      amount: object.amount
    };
  },
  toAmino(message: EventDistributeRevenue): EventDistributeRevenueAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.contract = message.contract;
    obj.withdrawer_address = message.withdrawerAddress;
    obj.amount = message.amount;
    return obj;
  },
  fromAminoMsg(object: EventDistributeRevenueAminoMsg): EventDistributeRevenue {
    return EventDistributeRevenue.fromAmino(object.value);
  },
  fromProtoMsg(message: EventDistributeRevenueProtoMsg): EventDistributeRevenue {
    return EventDistributeRevenue.decode(message.value);
  },
  toProto(message: EventDistributeRevenue): Uint8Array {
    return EventDistributeRevenue.encode(message).finish();
  },
  toProtoMsg(message: EventDistributeRevenue): EventDistributeRevenueProtoMsg {
    return {
      typeUrl: "/evmos.revenue.v1.EventDistributeRevenue",
      value: EventDistributeRevenue.encode(message).finish()
    };
  }
};