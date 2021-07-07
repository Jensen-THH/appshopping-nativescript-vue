import { View } from "tns-core-modules/ui/core/view";

export class AutoFocusView extends View {

    createNativeView() {
        if (typeof android !== "undefined") {
            const linearLayout = new android.widget.LinearLayout(this._context);
            linearLayout.setFocusableInTouchMode(true);
            linearLayout.setFocusable(true);

            return linearLayout;
        }
        return super.createNativeView();
    }

    onLoaded() {
        super.onLoaded();
        this.requestFocus();
    }

    requestFocus() {
        if (typeof android !== "undefined") {
            const nativeViewProtected = this.nativeViewProtected;
            nativeViewProtected.requestFocus();
        }
    }
}