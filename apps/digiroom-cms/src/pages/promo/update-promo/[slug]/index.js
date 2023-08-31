import { useRouter } from "next/router";
import FormPromo from "@/components/FormPromo";
import { typePage } from "@/constants/type";

export default function UpdatePromoCMS() {
    const router = useRouter();

    return (
        <div className="pt-5">
            <div className="flex w-full">
                <FormPromo pathSlug={router.query.slug} type={typePage.UPDATE} />
            </div>
        </div>
    )
}