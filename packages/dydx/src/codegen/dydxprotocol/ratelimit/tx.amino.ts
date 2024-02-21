import { AminoMsg } from "@cosmjs/amino";
import { MsgSetLimitParams, MsgDeleteLimitParams } from "./tx";
export interface MsgSetLimitParamsAminoType extends AminoMsg {
  type: "/dydxprotocol.ratelimit.MsgSetLimitParams";
  value: {
    authority: string;
    limit_params: {
      denom: string;
      limiters: {
        period_sec: number;
        baseline_minimum: Uint8Array;
        baseline_tvl_ppm: number;
      }[];
    };
  };
}
export interface MsgDeleteLimitParamsAminoType extends AminoMsg {
  type: "/dydxprotocol.ratelimit.MsgDeleteLimitParams";
  value: {
    authority: string;
    denom: string;
  };
}
export const AminoConverter = {
  "/dydxprotocol.ratelimit.MsgSetLimitParams": {
    aminoType: "/dydxprotocol.ratelimit.MsgSetLimitParams",
    toAmino: ({
      authority,
      limitParams
    }: MsgSetLimitParams): MsgSetLimitParamsAminoType["value"] => {
      return {
        authority,
        limit_params: {
          denom: limitParams.denom,
          limiters: limitParams.limiters.map(el0 => ({
            period_sec: el0.periodSec,
            baseline_minimum: el0.baselineMinimum,
            baseline_tvl_ppm: el0.baselineTvlPpm
          }))
        }
      };
    },
    fromAmino: ({
      authority,
      limit_params
    }: MsgSetLimitParamsAminoType["value"]): MsgSetLimitParams => {
      return {
        authority,
        limitParams: {
          denom: limit_params.denom,
          limiters: limit_params.limiters.map(el1 => ({
            periodSec: el1.period_sec,
            baselineMinimum: el1.baseline_minimum,
            baselineTvlPpm: el1.baseline_tvl_ppm
          }))
        }
      };
    }
  },
  "/dydxprotocol.ratelimit.MsgDeleteLimitParams": {
    aminoType: "/dydxprotocol.ratelimit.MsgDeleteLimitParams",
    toAmino: ({
      authority,
      denom
    }: MsgDeleteLimitParams): MsgDeleteLimitParamsAminoType["value"] => {
      return {
        authority,
        denom
      };
    },
    fromAmino: ({
      authority,
      denom
    }: MsgDeleteLimitParamsAminoType["value"]): MsgDeleteLimitParams => {
      return {
        authority,
        denom
      };
    }
  }
};