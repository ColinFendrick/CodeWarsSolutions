import java.util.List;
import java.util.HashMap;

public class PaginationHelper<I> {

	private int size;
	private int pages;
	private int itemsPerPage;
	private HashMap<Integer,List<I>> page;

	public PaginationHelper(List<I> collection, int itemsPerPage) {
		this.itemsPerPage = itemsPerPage;
		this.size = collection.size();
		this.pages = (int)Math.ceil((double)this.size/(double)this.itemsPerPage);
		this.page = new HashMap();
		for (int i = 0; i < this.pages; i++)
			this.page.put(i,collection.subList(i*this.itemsPerPage, Math.min((i+1)*this.itemsPerPage,this.size)));
	}

	public int itemCount() {
		return this.size;
	}

	public int pageCount() {
		return this.pages;
	}

	public int pageItemCount(int pageIndex) {
		List<I> currentPage = this.page.get(pageIndex);
		if (currentPage == null)
			return -1;
		return currentPage.size();
	}

	public int pageIndex(int itemIndex) {
		if (itemIndex >= this.size || itemIndex < 0)
			return -1;
		return itemIndex /this.itemsPerPage;
	}
}