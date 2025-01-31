/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react-hooks/exhaustive-deps */
import ViewOrganization from "@/components/pages/organizations";
import LayoutPortal from "@/layouts/portal";

const Organization = () => {
    return (
        <>
            <LayoutPortal>
                <ViewOrganization
                    textEmptyContent={"Esta sección está vacía..."}
                />
            </LayoutPortal>
        </>
    );
};

export default Organization;
