import { BinaryWriter } from "../../../binary";
import { isSet } from "../../../helpers";
/**
 * EventCreateClawbackVestingAccount defines the event type
 * for creating a clawback vesting account
 */
export interface EventCreateClawbackVestingAccount {
  /** sender is the address of the sender */
  sender: string;
  /** coins to be vested */
  coins: string;
  /** start_time is the time when the coins start to vest */
  startTime: string;
  /** merge */
  merge: string;
  /** account address of recipient */
  account: string;
}
export interface EventCreateClawbackVestingAccountProtoMsg {
  typeUrl: "/evmos.vesting.v1.EventCreateClawbackVestingAccount";
  value: Uint8Array;
}
/**
 * EventCreateClawbackVestingAccount defines the event type
 * for creating a clawback vesting account
 */
export interface EventCreateClawbackVestingAccountAmino {
  /** sender is the address of the sender */
  sender: string;
  /** coins to be vested */
  coins: string;
  /** start_time is the time when the coins start to vest */
  start_time: string;
  /** merge */
  merge: string;
  /** account address of recipient */
  account: string;
}
export interface EventCreateClawbackVestingAccountAminoMsg {
  type: "/evmos.vesting.v1.EventCreateClawbackVestingAccount";
  value: EventCreateClawbackVestingAccountAmino;
}
/**
 * EventCreateClawbackVestingAccount defines the event type
 * for creating a clawback vesting account
 */
export interface EventCreateClawbackVestingAccountSDKType {
  sender: string;
  coins: string;
  start_time: string;
  merge: string;
  account: string;
}
/** EventClawback defines the event type for clawback */
export interface EventClawback {
  /** funder is the address of the funder */
  funder: string;
  /** account is the address of the account */
  account: string;
  /** destination is the address of the destination */
  destination: string;
}
export interface EventClawbackProtoMsg {
  typeUrl: "/evmos.vesting.v1.EventClawback";
  value: Uint8Array;
}
/** EventClawback defines the event type for clawback */
export interface EventClawbackAmino {
  /** funder is the address of the funder */
  funder: string;
  /** account is the address of the account */
  account: string;
  /** destination is the address of the destination */
  destination: string;
}
export interface EventClawbackAminoMsg {
  type: "/evmos.vesting.v1.EventClawback";
  value: EventClawbackAmino;
}
/** EventClawback defines the event type for clawback */
export interface EventClawbackSDKType {
  funder: string;
  account: string;
  destination: string;
}
/** EventUpdateVestingFunder defines the event type for updating the vesting funder */
export interface EventUpdateVestingFunder {
  /** funder is the address of the funder */
  funder: string;
  /** account is the address of the account */
  account: string;
  /** new_funder is the address of the new funder */
  newFunder: string;
}
export interface EventUpdateVestingFunderProtoMsg {
  typeUrl: "/evmos.vesting.v1.EventUpdateVestingFunder";
  value: Uint8Array;
}
/** EventUpdateVestingFunder defines the event type for updating the vesting funder */
export interface EventUpdateVestingFunderAmino {
  /** funder is the address of the funder */
  funder: string;
  /** account is the address of the account */
  account: string;
  /** new_funder is the address of the new funder */
  new_funder: string;
}
export interface EventUpdateVestingFunderAminoMsg {
  type: "/evmos.vesting.v1.EventUpdateVestingFunder";
  value: EventUpdateVestingFunderAmino;
}
/** EventUpdateVestingFunder defines the event type for updating the vesting funder */
export interface EventUpdateVestingFunderSDKType {
  funder: string;
  account: string;
  new_funder: string;
}
function createBaseEventCreateClawbackVestingAccount(): EventCreateClawbackVestingAccount {
  return {
    sender: "",
    coins: "",
    startTime: "",
    merge: "",
    account: ""
  };
}
export const EventCreateClawbackVestingAccount = {
  typeUrl: "/evmos.vesting.v1.EventCreateClawbackVestingAccount",
  encode(message: EventCreateClawbackVestingAccount, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.coins !== "") {
      writer.uint32(18).string(message.coins);
    }
    if (message.startTime !== "") {
      writer.uint32(26).string(message.startTime);
    }
    if (message.merge !== "") {
      writer.uint32(34).string(message.merge);
    }
    if (message.account !== "") {
      writer.uint32(42).string(message.account);
    }
    return writer;
  },
  fromJSON(object: any): EventCreateClawbackVestingAccount {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      coins: isSet(object.coins) ? String(object.coins) : "",
      startTime: isSet(object.startTime) ? String(object.startTime) : "",
      merge: isSet(object.merge) ? String(object.merge) : "",
      account: isSet(object.account) ? String(object.account) : ""
    };
  },
  fromPartial(object: Partial<EventCreateClawbackVestingAccount>): EventCreateClawbackVestingAccount {
    const message = createBaseEventCreateClawbackVestingAccount();
    message.sender = object.sender ?? "";
    message.coins = object.coins ?? "";
    message.startTime = object.startTime ?? "";
    message.merge = object.merge ?? "";
    message.account = object.account ?? "";
    return message;
  },
  fromAmino(object: EventCreateClawbackVestingAccountAmino): EventCreateClawbackVestingAccount {
    return {
      sender: object.sender,
      coins: object.coins,
      startTime: object.start_time,
      merge: object.merge,
      account: object.account
    };
  },
  toAmino(message: EventCreateClawbackVestingAccount): EventCreateClawbackVestingAccountAmino {
    const obj: any = {};
    obj.sender = message.sender;
    obj.coins = message.coins;
    obj.start_time = message.startTime;
    obj.merge = message.merge;
    obj.account = message.account;
    return obj;
  },
  fromAminoMsg(object: EventCreateClawbackVestingAccountAminoMsg): EventCreateClawbackVestingAccount {
    return EventCreateClawbackVestingAccount.fromAmino(object.value);
  },
  fromProtoMsg(message: EventCreateClawbackVestingAccountProtoMsg): EventCreateClawbackVestingAccount {
    return EventCreateClawbackVestingAccount.decode(message.value);
  },
  toProto(message: EventCreateClawbackVestingAccount): Uint8Array {
    return EventCreateClawbackVestingAccount.encode(message).finish();
  },
  toProtoMsg(message: EventCreateClawbackVestingAccount): EventCreateClawbackVestingAccountProtoMsg {
    return {
      typeUrl: "/evmos.vesting.v1.EventCreateClawbackVestingAccount",
      value: EventCreateClawbackVestingAccount.encode(message).finish()
    };
  }
};
function createBaseEventClawback(): EventClawback {
  return {
    funder: "",
    account: "",
    destination: ""
  };
}
export const EventClawback = {
  typeUrl: "/evmos.vesting.v1.EventClawback",
  encode(message: EventClawback, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.funder !== "") {
      writer.uint32(10).string(message.funder);
    }
    if (message.account !== "") {
      writer.uint32(18).string(message.account);
    }
    if (message.destination !== "") {
      writer.uint32(26).string(message.destination);
    }
    return writer;
  },
  fromJSON(object: any): EventClawback {
    return {
      funder: isSet(object.funder) ? String(object.funder) : "",
      account: isSet(object.account) ? String(object.account) : "",
      destination: isSet(object.destination) ? String(object.destination) : ""
    };
  },
  fromPartial(object: Partial<EventClawback>): EventClawback {
    const message = createBaseEventClawback();
    message.funder = object.funder ?? "";
    message.account = object.account ?? "";
    message.destination = object.destination ?? "";
    return message;
  },
  fromAmino(object: EventClawbackAmino): EventClawback {
    return {
      funder: object.funder,
      account: object.account,
      destination: object.destination
    };
  },
  toAmino(message: EventClawback): EventClawbackAmino {
    const obj: any = {};
    obj.funder = message.funder;
    obj.account = message.account;
    obj.destination = message.destination;
    return obj;
  },
  fromAminoMsg(object: EventClawbackAminoMsg): EventClawback {
    return EventClawback.fromAmino(object.value);
  },
  fromProtoMsg(message: EventClawbackProtoMsg): EventClawback {
    return EventClawback.decode(message.value);
  },
  toProto(message: EventClawback): Uint8Array {
    return EventClawback.encode(message).finish();
  },
  toProtoMsg(message: EventClawback): EventClawbackProtoMsg {
    return {
      typeUrl: "/evmos.vesting.v1.EventClawback",
      value: EventClawback.encode(message).finish()
    };
  }
};
function createBaseEventUpdateVestingFunder(): EventUpdateVestingFunder {
  return {
    funder: "",
    account: "",
    newFunder: ""
  };
}
export const EventUpdateVestingFunder = {
  typeUrl: "/evmos.vesting.v1.EventUpdateVestingFunder",
  encode(message: EventUpdateVestingFunder, writer: BinaryWriter = BinaryWriter.create()): BinaryWriter {
    if (message.funder !== "") {
      writer.uint32(10).string(message.funder);
    }
    if (message.account !== "") {
      writer.uint32(18).string(message.account);
    }
    if (message.newFunder !== "") {
      writer.uint32(26).string(message.newFunder);
    }
    return writer;
  },
  fromJSON(object: any): EventUpdateVestingFunder {
    return {
      funder: isSet(object.funder) ? String(object.funder) : "",
      account: isSet(object.account) ? String(object.account) : "",
      newFunder: isSet(object.newFunder) ? String(object.newFunder) : ""
    };
  },
  fromPartial(object: Partial<EventUpdateVestingFunder>): EventUpdateVestingFunder {
    const message = createBaseEventUpdateVestingFunder();
    message.funder = object.funder ?? "";
    message.account = object.account ?? "";
    message.newFunder = object.newFunder ?? "";
    return message;
  },
  fromAmino(object: EventUpdateVestingFunderAmino): EventUpdateVestingFunder {
    return {
      funder: object.funder,
      account: object.account,
      newFunder: object.new_funder
    };
  },
  toAmino(message: EventUpdateVestingFunder): EventUpdateVestingFunderAmino {
    const obj: any = {};
    obj.funder = message.funder;
    obj.account = message.account;
    obj.new_funder = message.newFunder;
    return obj;
  },
  fromAminoMsg(object: EventUpdateVestingFunderAminoMsg): EventUpdateVestingFunder {
    return EventUpdateVestingFunder.fromAmino(object.value);
  },
  fromProtoMsg(message: EventUpdateVestingFunderProtoMsg): EventUpdateVestingFunder {
    return EventUpdateVestingFunder.decode(message.value);
  },
  toProto(message: EventUpdateVestingFunder): Uint8Array {
    return EventUpdateVestingFunder.encode(message).finish();
  },
  toProtoMsg(message: EventUpdateVestingFunder): EventUpdateVestingFunderProtoMsg {
    return {
      typeUrl: "/evmos.vesting.v1.EventUpdateVestingFunder",
      value: EventUpdateVestingFunder.encode(message).finish()
    };
  }
};