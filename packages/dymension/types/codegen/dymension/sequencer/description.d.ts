import { BinaryWriter } from "../../binary";
/** Description defines a sequencer description. */
export interface Description {
    /** moniker defines a human-readable name for the sequencer. */
    moniker: string;
    /** identity defines an optional identity signature (ex. UPort or Keybase). */
    identity: string;
    /** website defines an optional website link. */
    website: string;
    /** securityContact defines an optional email for security contact. */
    securityContact: string;
    /** details define other optional details. */
    details: string;
}
export interface DescriptionProtoMsg {
    typeUrl: "/dymensionxyz.dymension.sequencer.Description";
    value: Uint8Array;
}
/** Description defines a sequencer description. */
export interface DescriptionAmino {
    /** moniker defines a human-readable name for the sequencer. */
    moniker?: string;
    /** identity defines an optional identity signature (ex. UPort or Keybase). */
    identity?: string;
    /** website defines an optional website link. */
    website?: string;
    /** securityContact defines an optional email for security contact. */
    securityContact?: string;
    /** details define other optional details. */
    details?: string;
}
export interface DescriptionAminoMsg {
    type: "/dymensionxyz.dymension.sequencer.Description";
    value: DescriptionAmino;
}
/** Description defines a sequencer description. */
export interface DescriptionSDKType {
    moniker: string;
    identity: string;
    website: string;
    securityContact: string;
    details: string;
}
export declare const Description: {
    typeUrl: string;
    encode(message: Description, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Description;
    fromPartial(object: Partial<Description>): Description;
    fromAmino(object: DescriptionAmino): Description;
    toAmino(message: Description): DescriptionAmino;
    fromAminoMsg(object: DescriptionAminoMsg): Description;
    fromProtoMsg(message: DescriptionProtoMsg): Description;
    toProto(message: Description): Uint8Array;
    toProtoMsg(message: Description): DescriptionProtoMsg;
};
