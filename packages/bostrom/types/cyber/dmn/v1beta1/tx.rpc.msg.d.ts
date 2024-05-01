import { Rpc } from "../../../helpers";
import { MsgCreateThought, MsgCreateThoughtResponse, MsgForgetThought, MsgForgetThoughtResponse, MsgChangeThoughtParticle, MsgChangeThoughtParticleResponse, MsgChangeThoughtName, MsgChangeThoughtNameResponse, MsgChangeThoughtInput, MsgChangeThoughtInputResponse, MsgChangeThoughtGasPrice, MsgChangeThoughtGasPriceResponse, MsgChangeThoughtPeriod, MsgChangeThoughtPeriodResponse, MsgChangeThoughtBlock, MsgChangeThoughtBlockResponse } from "./tx";
export interface Msg {
    createThought(request: MsgCreateThought): Promise<MsgCreateThoughtResponse>;
    forgetThought(request: MsgForgetThought): Promise<MsgForgetThoughtResponse>;
    changeThoughtParticle(request: MsgChangeThoughtParticle): Promise<MsgChangeThoughtParticleResponse>;
    changeThoughtName(request: MsgChangeThoughtName): Promise<MsgChangeThoughtNameResponse>;
    changeThoughtInput(request: MsgChangeThoughtInput): Promise<MsgChangeThoughtInputResponse>;
    changeThoughtGasPrice(request: MsgChangeThoughtGasPrice): Promise<MsgChangeThoughtGasPriceResponse>;
    changeThoughtPeriod(request: MsgChangeThoughtPeriod): Promise<MsgChangeThoughtPeriodResponse>;
    changeThoughtBlock(request: MsgChangeThoughtBlock): Promise<MsgChangeThoughtBlockResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    createThought(request: MsgCreateThought): Promise<MsgCreateThoughtResponse>;
    forgetThought(request: MsgForgetThought): Promise<MsgForgetThoughtResponse>;
    changeThoughtParticle(request: MsgChangeThoughtParticle): Promise<MsgChangeThoughtParticleResponse>;
    changeThoughtName(request: MsgChangeThoughtName): Promise<MsgChangeThoughtNameResponse>;
    changeThoughtInput(request: MsgChangeThoughtInput): Promise<MsgChangeThoughtInputResponse>;
    changeThoughtGasPrice(request: MsgChangeThoughtGasPrice): Promise<MsgChangeThoughtGasPriceResponse>;
    changeThoughtPeriod(request: MsgChangeThoughtPeriod): Promise<MsgChangeThoughtPeriodResponse>;
    changeThoughtBlock(request: MsgChangeThoughtBlock): Promise<MsgChangeThoughtBlockResponse>;
}
