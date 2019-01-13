package jerry.adder1;

import android.widget.Toast;

import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CallbackContext;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

/**
 * This class echoes a string called from JavaScript.
 */
public class Adder1 extends CordovaPlugin {

   @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {

        if (action.equals("performAdd")) {
            int arg1 = args.getInt(0);
            int arg2 = args.getInt(1);
            /* Indicating success is failure is done by calling the appropriate method on the
            callbackContext.*/
            int result = arg1 + arg2;
            Toast.makeText(this.cordova.getActivity().getApplicationContext(), "my toast", Toast.LENGTH_SHORT).show();
            callbackContext.success("result calculated in Java: " + result);
            return true;
        }
        return false;
    }

}
