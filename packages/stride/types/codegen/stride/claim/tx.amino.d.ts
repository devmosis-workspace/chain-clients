import { AminoMsg } from "@cosmjs/amino";
import { MsgSetAirdropAllocations, MsgClaimFreeAmount, MsgCreateAirdrop, MsgDeleteAirdrop } from "./tx";
export interface MsgSetAirdropAllocationsAminoType extends AminoMsg {
    type: "/stride.claim.MsgSetAirdropAllocations";
    value: {
        allocator: string;
        airdrop_identifier: string;
        users: string[];
        weights: string[];
    };
}
export interface MsgClaimFreeAmountAminoType extends AminoMsg {
    type: "/stride.claim.MsgClaimFreeAmount";
    value: {
        user: string;
    };
}
export interface MsgCreateAirdropAminoType extends AminoMsg {
    type: "/stride.claim.MsgCreateAirdrop";
    value: {
        distributor: string;
        identifier: string;
        chain_id: string;
        denom: string;
        start_time: string;
        duration: string;
        autopilot_enabled: boolean;
    };
}
export interface MsgDeleteAirdropAminoType extends AminoMsg {
    type: "/stride.claim.MsgDeleteAirdrop";
    value: {
        distributor: string;
        identifier: string;
    };
}
export declare const AminoConverter: {
    "/stride.claim.MsgSetAirdropAllocations": {
        aminoType: string;
        toAmino: ({ allocator, airdropIdentifier, users, weights }: MsgSetAirdropAllocations) => MsgSetAirdropAllocationsAminoType["value"];
        fromAmino: ({ allocator, airdrop_identifier, users, weights }: MsgSetAirdropAllocationsAminoType["value"]) => MsgSetAirdropAllocations;
    };
    "/stride.claim.MsgClaimFreeAmount": {
        aminoType: string;
        toAmino: ({ user }: MsgClaimFreeAmount) => MsgClaimFreeAmountAminoType["value"];
        fromAmino: ({ user }: MsgClaimFreeAmountAminoType["value"]) => MsgClaimFreeAmount;
    };
    "/stride.claim.MsgCreateAirdrop": {
        aminoType: string;
        toAmino: ({ distributor, identifier, chainId, denom, startTime, duration, autopilotEnabled }: MsgCreateAirdrop) => MsgCreateAirdropAminoType["value"];
        fromAmino: ({ distributor, identifier, chain_id, denom, start_time, duration, autopilot_enabled }: MsgCreateAirdropAminoType["value"]) => MsgCreateAirdrop;
    };
    "/stride.claim.MsgDeleteAirdrop": {
        aminoType: string;
        toAmino: ({ distributor, identifier }: MsgDeleteAirdrop) => MsgDeleteAirdropAminoType["value"];
        fromAmino: ({ distributor, identifier }: MsgDeleteAirdropAminoType["value"]) => MsgDeleteAirdrop;
    };
};
