import * as _m0 from "protobufjs/minimal";
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
  encode(message: EventRegisterRevenue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  encode(message: EventUpdateRevenue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};
function createBaseEventCancelRevenue(): EventCancelRevenue {
  return {
    deployerAddress: "",
    contractAddress: ""
  };
}
export const EventCancelRevenue = {
  encode(message: EventCancelRevenue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  encode(message: EventDistributeRevenue, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};