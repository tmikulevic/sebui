package lt.seb.sebtask;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonFactory;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;


@RestController
public class Controller {
	private ObjectMapper mapper = new ObjectMapper(new JsonFactory())
		      .configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
	private Information infoModel;
	
	private String createCustomer(String json) {
		try {
			infoModel = mapper.readValue(json, Information.class);
		}
		catch (Exception e) {
		      e.printStackTrace();
		}
		return "ok";
	}
	
	// @CrossOrigin(origins = HOST_IP)
	  @RequestMapping(method = RequestMethod.POST, value = "/create")
	  @ResponseBody
	  public String create(@RequestBody String json) {
		  //System.out.println(json);
		  return createCustomer(json);
	  }
	 
	// @CrossOrigin(origins = HOST_IP)
	  @RequestMapping(method = RequestMethod.GET, value = "/getlst")
	  @ResponseBody
	  public String getlst() {
	   //return buildList(docType, nature);
		  return "kol las be list";
	  }
}
