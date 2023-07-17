import { AminoMsg } from "@cosmjs/amino";
import { MsgRegisterPayee, MsgRegisterCounterpartyPayee, MsgPayPacketFee, MsgPayPacketFeeAsync } from "./tx";
export interface MsgRegisterPayeeAminoType extends AminoMsg {
    type: "cosmos-sdk/MsgRegisterPayee";
    value: {
        port_id: string;
        channel_id: string;
        relayer: string;
        payee: string;
    };
}
export interface MsgRegisterCounterpartyPayeeAminoType extends AminoMsg {
    type: "cosmos-sdk/MsgRegisterCounterpartyPayee";
    value: {
        port_id: string;
        channel_id: string;
        relayer: string;
        counterparty_payee: string;
    };
}
export interface MsgPayPacketFeeAminoType extends AminoMsg {
    type: "cosmos-sdk/MsgPayPacketFee";
    value: {
        fee: {
            recv_fee: {
                denom: string;
                amount: string;
            }[];
            ack_fee: {
                denom: string;
                amount: string;
            }[];
            timeout_fee: {
                denom: string;
                amount: string;
            }[];
        };
        source_port_id: string;
        source_channel_id: string;
        signer: string;
        relayers: string[];
    };
}
export interface MsgPayPacketFeeAsyncAminoType extends AminoMsg {
    type: "cosmos-sdk/MsgPayPacketFeeAsync";
    value: {
        packet_id: {
            port_id: string;
            channel_id: string;
            sequence: string;
        };
        packet_fee: {
            fee: {
                recv_fee: {
                    denom: string;
                    amount: string;
                }[];
                ack_fee: {
                    denom: string;
                    amount: string;
                }[];
                timeout_fee: {
                    denom: string;
                    amount: string;
                }[];
            };
            refund_address: string;
            relayers: string[];
        };
    };
}
export declare const AminoConverter: {
    "/ibc.applications.fee.v1.MsgRegisterPayee": {
        aminoType: string;
        toAmino: ({ portId, channelId, relayer, payee }: MsgRegisterPayee) => MsgRegisterPayeeAminoType["value"];
        fromAmino: ({ port_id, channel_id, relayer, payee }: MsgRegisterPayeeAminoType["value"]) => MsgRegisterPayee;
    };
    "/ibc.applications.fee.v1.MsgRegisterCounterpartyPayee": {
        aminoType: string;
        toAmino: ({ portId, channelId, relayer, counterpartyPayee }: MsgRegisterCounterpartyPayee) => MsgRegisterCounterpartyPayeeAminoType["value"];
        fromAmino: ({ port_id, channel_id, relayer, counterparty_payee }: MsgRegisterCounterpartyPayeeAminoType["value"]) => MsgRegisterCounterpartyPayee;
    };
    "/ibc.applications.fee.v1.MsgPayPacketFee": {
        aminoType: string;
        toAmino: ({ fee, sourcePortId, sourceChannelId, signer, relayers }: MsgPayPacketFee) => MsgPayPacketFeeAminoType["value"];
        fromAmino: ({ fee, source_port_id, source_channel_id, signer, relayers }: MsgPayPacketFeeAminoType["value"]) => MsgPayPacketFee;
    };
    "/ibc.applications.fee.v1.MsgPayPacketFeeAsync": {
        aminoType: string;
        toAmino: ({ packetId, packetFee }: MsgPayPacketFeeAsync) => MsgPayPacketFeeAsyncAminoType["value"];
        fromAmino: ({ packet_id, packet_fee }: MsgPayPacketFeeAsyncAminoType["value"]) => MsgPayPacketFeeAsync;
    };
};
