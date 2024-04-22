import { MsgCreateBid, MsgCloseBid } from "./bid";
import { MsgWithdrawLease, MsgCreateLease, MsgCloseLease } from "./lease";
export const AminoConverter = {
  "/akash.market.v1beta3.MsgCreateBid": {
    aminoType: "/akash.market.v1beta3.MsgCreateBid",
    toAmino: MsgCreateBid.toAmino,
    fromAmino: MsgCreateBid.fromAmino
  },
  "/akash.market.v1beta3.MsgCloseBid": {
    aminoType: "/akash.market.v1beta3.MsgCloseBid",
    toAmino: MsgCloseBid.toAmino,
    fromAmino: MsgCloseBid.fromAmino
  },
  "/akash.market.v1beta3.MsgWithdrawLease": {
    aminoType: "/akash.market.v1beta3.MsgWithdrawLease",
    toAmino: MsgWithdrawLease.toAmino,
    fromAmino: MsgWithdrawLease.fromAmino
  },
  "/akash.market.v1beta3.MsgCreateLease": {
    aminoType: "/akash.market.v1beta3.MsgCreateLease",
    toAmino: MsgCreateLease.toAmino,
    fromAmino: MsgCreateLease.fromAmino
  },
  "/akash.market.v1beta3.MsgCloseLease": {
    aminoType: "/akash.market.v1beta3.MsgCloseLease",
    toAmino: MsgCloseLease.toAmino,
    fromAmino: MsgCloseLease.fromAmino
  }
};