import { CombinedData, LinkedinServicesInterface } from "./linkedin.services.interface";
import { CDPSession, Page } from "puppeteer-core";
import { LinkedinAbstractService } from "./linkedin.abstract.service";
interface RequiredData {
    url: string;
}
export declare class LinkedinLikeService extends LinkedinAbstractService implements LinkedinServicesInterface<RequiredData> {
    process(page: Page, cdp: CDPSession, data: CombinedData<RequiredData>): Promise<{
        linkedin_id: string;
        url: string;
    }>;
}
export {};