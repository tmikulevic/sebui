package lt.seb.sebtask;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.core.JsonFactory;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.DeserializationFeature;
import com.fasterxml.jackson.databind.ObjectMapper;

@RestController
public class Controller {
	private static final String HOST_IP = "http://localhost:4200";
	private ObjectMapper mapper = new ObjectMapper(new JsonFactory())
		      .configure(DeserializationFeature.FAIL_ON_UNKNOWN_PROPERTIES, false);
	private ObjectMapper mapperOut = new ObjectMapper();
	
	private Information infoModel;
	private List<Information> informationList = new ArrayList<Information>();
	
	private String createCustomer(String json) {
		try {
			infoModel = mapper.readValue(json, Information.class);
			informationList.add(infoModel);
		}
		catch (Exception e) {
		      e.printStackTrace();
		}
		//TODO: return
		return "ok";
	}
	
	 @CrossOrigin(origins = HOST_IP)
	  @RequestMapping(method = RequestMethod.POST, value = "/create")
	  @ResponseBody
	  public String create(@RequestBody String json) {
		  System.out.println(json);
		  return createCustomer(json);
	  }
	 
	 @CrossOrigin(origins = HOST_IP)
	  @RequestMapping(method = RequestMethod.GET, value = "/getlst")
	  @ResponseBody
	  public String getlst() {
		return buildList();
	  }
	  
	  public String buildList() {
		    
		    StringBuilder listString = new StringBuilder("\n[\n");
		    
		    boolean notFirstItem = false;
		    
		    for (Information info : informationList) {

		      
		      if (notFirstItem) {
		    	  listString.append(",\n");
		      } else {
		        notFirstItem = true;
		      }

		      try {
		    	  listString.append( mapperOut.writeValueAsString( info ) );
		      } catch (JsonProcessingException e1) {
		        e1.printStackTrace();
		      }
		      
		    }
		    
		    listString.append("\n]\n");

		    return listString.toString();
		  }
}
