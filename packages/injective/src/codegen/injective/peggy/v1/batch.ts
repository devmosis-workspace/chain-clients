import { ERC20Token, ERC20TokenSDKType } from "./attestation";
import { Long, isSet } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** OutgoingTxBatch represents a batch of transactions going from Peggy to ETH */
export interface OutgoingTxBatch {
  batchNonce: Long;
  batchTimeout: Long;
  transactions: OutgoingTransferTx[];
  tokenContract: string;
  block: Long;
}
/** OutgoingTxBatch represents a batch of transactions going from Peggy to ETH */
export interface OutgoingTxBatchSDKType {
  batch_nonce: Long;
  batch_timeout: Long;
  transactions: OutgoingTransferTxSDKType[];
  token_contract: string;
  block: Long;
}
/** OutgoingTransferTx represents an individual send from Peggy to ETH */
export interface OutgoingTransferTx {
  id: Long;
  sender: string;
  destAddress: string;
  erc20Token?: ERC20Token;
  erc20Fee?: ERC20Token;
}
/** OutgoingTransferTx represents an individual send from Peggy to ETH */
export interface OutgoingTransferTxSDKType {
  id: Long;
  sender: string;
  dest_address: string;
  erc20_token?: ERC20TokenSDKType;
  erc20_fee?: ERC20TokenSDKType;
}
function createBaseOutgoingTxBatch(): OutgoingTxBatch {
  return {
    batchNonce: Long.UZERO,
    batchTimeout: Long.UZERO,
    transactions: [],
    tokenContract: "",
    block: Long.UZERO
  };
}
export const OutgoingTxBatch = {
  encode(message: OutgoingTxBatch, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.batchNonce.isZero()) {
      writer.uint32(8).uint64(message.batchNonce);
    }
    if (!message.batchTimeout.isZero()) {
      writer.uint32(16).uint64(message.batchTimeout);
    }
    for (const v of message.transactions) {
      OutgoingTransferTx.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    if (message.tokenContract !== "") {
      writer.uint32(34).string(message.tokenContract);
    }
    if (!message.block.isZero()) {
      writer.uint32(40).uint64(message.block);
    }
    return writer;
  },
  fromJSON(object: any): OutgoingTxBatch {
    return {
      batchNonce: isSet(object.batchNonce) ? Long.fromValue(object.batchNonce) : Long.UZERO,
      batchTimeout: isSet(object.batchTimeout) ? Long.fromValue(object.batchTimeout) : Long.UZERO,
      transactions: Array.isArray(object?.transactions) ? object.transactions.map((e: any) => OutgoingTransferTx.fromJSON(e)) : [],
      tokenContract: isSet(object.tokenContract) ? String(object.tokenContract) : "",
      block: isSet(object.block) ? Long.fromValue(object.block) : Long.UZERO
    };
  },
  fromPartial(object: Partial<OutgoingTxBatch>): OutgoingTxBatch {
    const message = createBaseOutgoingTxBatch();
    message.batchNonce = object.batchNonce !== undefined && object.batchNonce !== null ? Long.fromValue(object.batchNonce) : Long.UZERO;
    message.batchTimeout = object.batchTimeout !== undefined && object.batchTimeout !== null ? Long.fromValue(object.batchTimeout) : Long.UZERO;
    message.transactions = object.transactions?.map(e => OutgoingTransferTx.fromPartial(e)) || [];
    message.tokenContract = object.tokenContract ?? "";
    message.block = object.block !== undefined && object.block !== null ? Long.fromValue(object.block) : Long.UZERO;
    return message;
  }
};
function createBaseOutgoingTransferTx(): OutgoingTransferTx {
  return {
    id: Long.UZERO,
    sender: "",
    destAddress: "",
    erc20Token: undefined,
    erc20Fee: undefined
  };
}
export const OutgoingTransferTx = {
  encode(message: OutgoingTransferTx, writer: _m0.Writer = _m0.Writer.create()): _m0.Writer {
    if (!message.id.isZero()) {
      writer.uint32(8).uint64(message.id);
    }
    if (message.sender !== "") {
      writer.uint32(18).string(message.sender);
    }
    if (message.destAddress !== "") {
      writer.uint32(26).string(message.destAddress);
    }
    if (message.erc20Token !== undefined) {
      ERC20Token.encode(message.erc20Token, writer.uint32(34).fork()).ldelim();
    }
    if (message.erc20Fee !== undefined) {
      ERC20Token.encode(message.erc20Fee, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },
  fromJSON(object: any): OutgoingTransferTx {
    return {
      id: isSet(object.id) ? Long.fromValue(object.id) : Long.UZERO,
      sender: isSet(object.sender) ? String(object.sender) : "",
      destAddress: isSet(object.destAddress) ? String(object.destAddress) : "",
      erc20Token: isSet(object.erc20Token) ? ERC20Token.fromJSON(object.erc20Token) : undefined,
      erc20Fee: isSet(object.erc20Fee) ? ERC20Token.fromJSON(object.erc20Fee) : undefined
    };
  },
  fromPartial(object: Partial<OutgoingTransferTx>): OutgoingTransferTx {
    const message = createBaseOutgoingTransferTx();
    message.id = object.id !== undefined && object.id !== null ? Long.fromValue(object.id) : Long.UZERO;
    message.sender = object.sender ?? "";
    message.destAddress = object.destAddress ?? "";
    message.erc20Token = object.erc20Token !== undefined && object.erc20Token !== null ? ERC20Token.fromPartial(object.erc20Token) : undefined;
    message.erc20Fee = object.erc20Fee !== undefined && object.erc20Fee !== null ? ERC20Token.fromPartial(object.erc20Fee) : undefined;
    return message;
  }
};