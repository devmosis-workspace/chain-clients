import * as _m0 from "protobufjs/minimal";
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
  encode(message: EventCreateClawbackVestingAccount, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  encode(message: EventClawback, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  encode(message: EventUpdateVestingFunder, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
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
  }
};