import * as _m0 from "protobufjs/minimal";
import { isSet } from "../../../helpers";
/** EventRegisterPair is an event emitted when a coin is registered. */
export interface EventRegisterPair {
  /** denom is the coin's denomination. */
  denom: string;
  /** erc20_address is the ERC20 contract address. */
  erc20Address: string;
}
/** EventRegisterPair is an event emitted when a coin is registered. */
export interface EventRegisterPairSDKType {
  denom: string;
  erc20_address: string;
}
/** EventToggleTokenConversion is an event emitted when a coin's token conversion is toggled. */
export interface EventToggleTokenConversion {
  /** denom is the coin's denomination. */
  denom: string;
  /** erc20_address is the ERC20 contract address. */
  erc20Address: string;
}
/** EventToggleTokenConversion is an event emitted when a coin's token conversion is toggled. */
export interface EventToggleTokenConversionSDKType {
  denom: string;
  erc20_address: string;
}
/** EventConvertCoin is an event emitted when a coin is converted. */
export interface EventConvertCoin {
  /** sender is the sender's address. */
  sender: string;
  /** receiver is the receiver's address. */
  receiver: string;
  /** amount is the amount of coins to be converted. */
  amount: string;
  /** denom is the coin's denomination. */
  denom: string;
  /** erc20_address is the ERC20 contract address. */
  erc20Address: string;
}
/** EventConvertCoin is an event emitted when a coin is converted. */
export interface EventConvertCoinSDKType {
  sender: string;
  receiver: string;
  amount: string;
  denom: string;
  erc20_address: string;
}
/** EventConvertERC20 is an event emitted when an ERC20 is converted. */
export interface EventConvertERC20 {
  /** sender is the sender's address. */
  sender: string;
  /** receiver is the receiver's address. */
  receiver: string;
  /** amount is the amount of coins to be converted. */
  amount: string;
  /** denom is the coin's denomination. */
  denom: string;
  /** contract_address of an ERC20 token contract, that is registered in a token pair */
  contractAddress: string;
}
/** EventConvertERC20 is an event emitted when an ERC20 is converted. */
export interface EventConvertERC20SDKType {
  sender: string;
  receiver: string;
  amount: string;
  denom: string;
  contract_address: string;
}
function createBaseEventRegisterPair(): EventRegisterPair {
  return {
    denom: "",
    erc20Address: ""
  };
}
export const EventRegisterPair = {
  encode(message: EventRegisterPair, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.erc20Address !== "") {
      writer.uint32(18).string(message.erc20Address);
    }
    return writer;
  },
  fromJSON(object: any): EventRegisterPair {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      erc20Address: isSet(object.erc20Address) ? String(object.erc20Address) : ""
    };
  },
  fromPartial(object: Partial<EventRegisterPair>): EventRegisterPair {
    const message = createBaseEventRegisterPair();
    message.denom = object.denom ?? "";
    message.erc20Address = object.erc20Address ?? "";
    return message;
  }
};
function createBaseEventToggleTokenConversion(): EventToggleTokenConversion {
  return {
    denom: "",
    erc20Address: ""
  };
}
export const EventToggleTokenConversion = {
  encode(message: EventToggleTokenConversion, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.erc20Address !== "") {
      writer.uint32(18).string(message.erc20Address);
    }
    return writer;
  },
  fromJSON(object: any): EventToggleTokenConversion {
    return {
      denom: isSet(object.denom) ? String(object.denom) : "",
      erc20Address: isSet(object.erc20Address) ? String(object.erc20Address) : ""
    };
  },
  fromPartial(object: Partial<EventToggleTokenConversion>): EventToggleTokenConversion {
    const message = createBaseEventToggleTokenConversion();
    message.denom = object.denom ?? "";
    message.erc20Address = object.erc20Address ?? "";
    return message;
  }
};
function createBaseEventConvertCoin(): EventConvertCoin {
  return {
    sender: "",
    receiver: "",
    amount: "",
    denom: "",
    erc20Address: ""
  };
}
export const EventConvertCoin = {
  encode(message: EventConvertCoin, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    if (message.denom !== "") {
      writer.uint32(34).string(message.denom);
    }
    if (message.erc20Address !== "") {
      writer.uint32(42).string(message.erc20Address);
    }
    return writer;
  },
  fromJSON(object: any): EventConvertCoin {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      erc20Address: isSet(object.erc20Address) ? String(object.erc20Address) : ""
    };
  },
  fromPartial(object: Partial<EventConvertCoin>): EventConvertCoin {
    const message = createBaseEventConvertCoin();
    message.sender = object.sender ?? "";
    message.receiver = object.receiver ?? "";
    message.amount = object.amount ?? "";
    message.denom = object.denom ?? "";
    message.erc20Address = object.erc20Address ?? "";
    return message;
  }
};
function createBaseEventConvertERC20(): EventConvertERC20 {
  return {
    sender: "",
    receiver: "",
    amount: "",
    denom: "",
    contractAddress: ""
  };
}
export const EventConvertERC20 = {
  encode(message: EventConvertERC20, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }
    if (message.amount !== "") {
      writer.uint32(26).string(message.amount);
    }
    if (message.denom !== "") {
      writer.uint32(34).string(message.denom);
    }
    if (message.contractAddress !== "") {
      writer.uint32(42).string(message.contractAddress);
    }
    return writer;
  },
  fromJSON(object: any): EventConvertERC20 {
    return {
      sender: isSet(object.sender) ? String(object.sender) : "",
      receiver: isSet(object.receiver) ? String(object.receiver) : "",
      amount: isSet(object.amount) ? String(object.amount) : "",
      denom: isSet(object.denom) ? String(object.denom) : "",
      contractAddress: isSet(object.contractAddress) ? String(object.contractAddress) : ""
    };
  },
  fromPartial(object: Partial<EventConvertERC20>): EventConvertERC20 {
    const message = createBaseEventConvertERC20();
    message.sender = object.sender ?? "";
    message.receiver = object.receiver ?? "";
    message.amount = object.amount ?? "";
    message.denom = object.denom ?? "";
    message.contractAddress = object.contractAddress ?? "";
    return message;
  }
};