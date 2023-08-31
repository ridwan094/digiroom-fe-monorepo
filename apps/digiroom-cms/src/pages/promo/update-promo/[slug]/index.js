import { useRouter } from "next/router";
import FormPromo from "@/components/FormPromo";

export default function UpdatePromoCMS() {
    const router = useRouter();

    return (
        <div className="pt-5">
            <div className="flex w-full">
                <FormPromo pathSlug={router.query.slug} type={'update'} />
            </div>
        </div>
    )
}